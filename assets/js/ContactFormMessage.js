const form = document.getElementById("my-form");

// Success and Error Message Templates
const successMsg = `
  <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">
    <i class="bi bi-send-check"></i>
    <strong class="mx-2">Thanks!</strong>your message delivered.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;

const errMsg = `
  <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
    <i class="bi bi-x-circle-fill"></i>
    <strong class="mx-2">Error!</strong> Oops! Message failed to deliver due to an unstable connection.
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;

// Form Submit Handler
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const formData = new FormData(event.target);

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.innerHTML = successMsg;
      form.reset(); // Clear form after successful submission
    } else {
      const data = await response.json();
      if (data.errors) {
        status.innerHTML = data.errors
          .map(
            (error) => `
            <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
              <i class="bi bi-x-circle-fill"></i>
              <strong class="mx-2">Error!</strong> ${error.message} 
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>`
          )
          .join("");
      } else {
        status.innerHTML = errMsg;
      }
    }
  } catch (error) {
    status.innerHTML = errMsg;
  }
}

// Attach Event Listener
form.addEventListener("submit", handleSubmit);
