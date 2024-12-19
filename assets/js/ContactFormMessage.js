const form = document.getElementById("my-form");

// Message Template Generator Function
function generateMessage(type, message) {
  const icon = type === "success" ? "bi-send-check" : "bi-x-circle-fill";
  const alertClass = type === "success" ? "alert-success" : "alert-danger";
  const strongMessage = type === "success" ? "Success!" : "Error!";

  return `
    <div class="alert ${alertClass} alert-dismissible d-flex align-items-center fade show">
      <i class="bi ${icon}"></i>
      <strong class="mx-2">${strongMessage}</strong> ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;
}

// Validation rules using Validate.js
const constraints = {
  name: {
    presence: { allowEmpty: false },
    length: {
      minimum: 2,
      message: "must be at least 3 characters"
    }
  },
  email: {
    presence: { allowEmpty: false },
    email: { message: "must be a valid email address" }
  },
  message: {
    presence: { allowEmpty: false },
    length: {
      minimum: 5,
      message: "must be at least 5 characters"
    }
  }
};

// Form Submit Handler
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const formData = new FormData(event.target);
  
  // Validate the form using Validate.js
  const validationErrors = validate(event.target, constraints);

  if (validationErrors) {
    status.innerHTML = Object.entries(validationErrors)
      .map(
        ([field, errors]) => 
          errors
            .map(
              error => generateMessage("error", error) // Generate error message
            )
            .join("")
      )
      .join("");
    return; // Stop further processing if validation fails
  }

  try {
    const response = await fetch(event.target.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.innerHTML = generateMessage("success", "Thank you, your message has been delivered.");
      form.reset(); // Clear form after successful submission
    } else {
      const data = await response.json();
      if (data.errors) {
        status.innerHTML = data.errors
          .map(
            (error) => generateMessage("error", error.message) // Generate error message
          )
          .join("");
      } else {
        status.innerHTML = generateMessage("error", "Oops! Message failed to deliver due to an unstable connection.");
      }
    }
  } catch (error) {
    status.innerHTML = generateMessage("error", "Oops! Message failed to deliver due to an unstable connection.");
  }
}

// Attach Event Listener
form.addEventListener("submit", handleSubmit);
