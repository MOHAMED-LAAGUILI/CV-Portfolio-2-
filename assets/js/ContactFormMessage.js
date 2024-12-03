var form = document.getElementById("my-form");

const successMsg = `
            <div class="alert alert-success alert-dismissible d-flex align-items-center fade show" id="my-form-status">
            <i class="bi bi-send-check"></i>
          <strong class="mx-2">Success!</strong> Thank you, your message has been Delivered
          <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>`;

const errMsg = `<div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
            <i class="bi bi-x-circle-fill"></i>
        <strong class="mx-2">Error!</strong> Oops! Message failed to deliver due to unstable connection
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
      </div>`;

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = successMsg;

        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = errMsg;
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = errMsg;
    });
}
form.addEventListener("submit", handleSubmit);
