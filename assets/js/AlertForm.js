// button download
       const btn = document.getElementById("download-btn");

       
       
       btn.addEventListener("click",function (){
            swal("Success!", "le pdf a été téléchargé . . .", "success");
        });
        btn.addEventListener("dblclick",function (){
            swal("Success!", "le pdf a été téléchargé . . .", "success");
        });


        /*
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
          */