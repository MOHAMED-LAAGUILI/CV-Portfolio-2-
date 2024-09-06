var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = `
      <div class="alert alert-success alert-dismissible d-flex align-items-center fade show" id="my-form-status">
      <i class="bi-check-circle-fill"></i>
    <strong class="mx-2">Success!</strong> Merci, votre message a ete délivrée
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;
  
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! Il y a eu un problème lors de la soumission de votre formulaire"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! Il y a eu un problème lors de la soumission de votre formulaire"
  });
}
form.addEventListener("submit", handleSubmit)