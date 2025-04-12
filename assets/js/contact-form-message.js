document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = document.getElementById('submit-button');
    
    // Success and error message templates
    const successMsg = `
      <div class="d-flex align-items-center fade show">
        <i class="bi bi-send-check"></i>
        <strong class="mx-2">Thanks!</strong> Message has been delivered 😃
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
    
    const errorMsg = `
      <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
        <i class="bi bi-x-circle-fill"></i>
        <strong class="mx-2">Error!</strong> Oops! Message failed to deliver due to an unstable connection 🥲
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>
    `;
    
    // Add input focus effects
    const formFields = document.querySelectorAll('.form-field input, .form-field textarea');
    
    formFields.forEach(field => {
      // Check if field has value on page load (for browser autofill)
      if (field.value.trim() !== '') {
        field.classList.add('has-value');
      }
      
      // Add event listeners for focus and blur
      field.addEventListener('focus', () => {
        field.parentElement.classList.add('focused');
      });
      
      field.addEventListener('blur', () => {
        field.parentElement.classList.remove('focused');
        if (field.value.trim() !== '') {
          field.classList.add('has-value');
        } else {
          field.classList.remove('has-value');
        }
      });
      
      // Handle input changes (for validation)
      field.addEventListener('input', () => {
        if (field.value.trim() !== '') {
          field.classList.add('has-value');
        } else {
          field.classList.remove('has-value');
        }
      });
    });
    
    // Form submission handler
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      // Reset status element to ensure messages appear every time
      formStatus.innerHTML = '';
      formStatus.style.display = 'none';
      formStatus.className = 'form-status';
      
      // Change button state to loading
      submitButton.disabled = true;
      submitButton.innerHTML = '<span>Sending...</span> <i class="bi bi-arrow-repeat spin"></i>';
      
      // Get form data
      const formData = new FormData(form);
      
      try {
        // Send form data to Formspree
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          // Show success message
          formStatus.innerHTML = successMsg;
          formStatus.className = 'form-status success';
          formStatus.style.display = 'block';
          
          // Reset form
          form.reset();
          formFields.forEach(field => field.classList.remove('has-value'));
        } else {
          // Handle error response
          const data = await response.json();
          
          if (data.errors) {
            // Show specific error messages if available
            formStatus.innerHTML = data.errors
              .map(error => `
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <i class="bi bi-x-circle-fill"></i>
                  <strong class="mx-2">Error!</strong> ${error.message} 🥲
                  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>
              `)
              .join('');
          } else {
            // Show generic error message
            formStatus.innerHTML = errorMsg;
          }
          
          formStatus.className = 'form-status error';
          formStatus.style.display = 'block';
        }
      } catch (error) {
        // Show error message for network/connection issues
        formStatus.innerHTML = `
          <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
            <i class="bi bi-x-circle-fill"></i>
            <strong class="mx-2">Error!</strong> Oops! Something went wrong: ${error.message} 🥲
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
          </div>
        `;
        formStatus.className = 'form-status error';
        formStatus.style.display = 'block';
      } finally {
        // Reset button state regardless of outcome
        submitButton.disabled = false;
        submitButton.innerHTML = '<span>Send Message</span> <i class="bi bi-send"></i>';
        
        // Add event listeners to close buttons
        setTimeout(() => {
          const closeButtons = document.querySelectorAll('.btn-close');
          closeButtons.forEach(button => {
            button.addEventListener('click', function() {
              this.parentElement.style.display = 'none';
            });
          });
        }, 100);
      }
    });
    
    // Add spinning animation for loading state
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .spin {
        animation: spin 1s linear infinite;
      }
      
      .alert {
        margin-bottom: 20px;
        padding: 15px;
        border-radius: 8px;
        display: flex;
        align-items: center;
      }
      
 
      .alert-danger {
        background-color: rgba(231, 76, 60, 0.1);
        color: #e74c3c;
        border: 1px solid #e74c3c;
      }
      
      .alert i {
        font-size: 20px;
        margin-right: 10px;
      }
      
      .btn-close {
        margin-left: auto;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0.5;
        transition: opacity 0.3s;
      }
      
      .btn-close:hover {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
  });