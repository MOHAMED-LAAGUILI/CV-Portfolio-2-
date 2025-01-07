const form=document.getElementById("my-form"),successMsg='\n  <div class="alert alert-success alert-dismissible d-flex align-items-center fade show">\n    <i class="bi bi-send-check"></i>\n    <strong class="mx-2">Thanks!</strong>Message has been delivered 😃\n    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>\n  </div>',errMsg='\n  <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">\n    <i class="bi bi-x-circle-fill"></i>\n    <strong class="mx-2">Error!</strong> Oops! Message failed to deliver due to an unstable connection 🥲\n    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>\n  </div>';async function handleSubmit(event){event.preventDefault();const status=document.getElementById("my-form-status"),formData=new FormData(event.target);try{const response=await fetch(event.target.action,{method:form.method,body:formData,headers:{Accept:"application/json"}});if(response.ok)status.innerHTML=successMsg,form.reset();else{const data=await response.json();data.errors?status.innerHTML=data.errors.map(error=>`\n            <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">\n              <i class="bi bi-x-circle-fill"></i>\n              <strong class="mx-2">Error!</strong> ${error.message} 🥲\n              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>\n            </div>`).join(""):status.innerHTML=errMsg}}catch(error){status.innerHTML=errMsg}}form.addEventListener("submit",handleSubmit);