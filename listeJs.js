

/*************************************addTask************************************** */
/*document.addEventListener("DOMContentLoaded", function() {*/
    function addTask() { 
        var input = document.getElementById("taskInput").value; 
        var ul = document.getElementById("taskList"); 
        
        if (input == "") {
            alert("Please enter a task.");
        } else {
            let li = document.createElement("li");
            li.innerHTML = '<i class="fa-regular fa-circle check-icon" ></i> '+input+'<i class="fa-regular fa-pen-to-square edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>';
            
            let checkIcon = li.querySelector(".check-icon");
            checkIcon.addEventListener("click", function() {
                toggleCheckIcon(li, input);
            });

            let editIcon = li.querySelector(".edit-icon");
            editIcon.addEventListener("click", function() {
                editTask(li, input);
            });

            let deleteIcon = li.querySelector(".trash-icon");
            deleteIcon.addEventListener("click", function() {
                deleteTask(li);
            });
            ul.appendChild(li); 
            document.getElementById("taskInput").value = ''; 
        }
    }

    var input = document.getElementById("taskInput"); 
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });



    
    function toggleCheckIcon(li, input) {
        if (li.querySelector(".check-icon").classList.contains("fa-circle")) {
          li.style.textDecoration = "line-through";
          li.innerHTML = '<i class="fa-regular fa-circle-check check-icon"></i> ' + input + ' <i class="fa-regular fa-pen-to-square edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>';
        } else {
          li.style.textDecoration = "none";
          li.innerHTML = '<i class="fa-regular fa-circle check-icon"></i> ' + input + ' <i class="fa-regular fa-pen-to-square edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>';
        }
      
        let newCheckIcon = li.querySelector(".check-icon");
        newCheckIcon.addEventListener("click", function() {
          toggleCheckIcon(li, input);
        });
      
        let newEditIcon = li.querySelector(".edit-icon");
        newEditIcon.addEventListener("click", function() {
          editTask(li, input);
        });

        let deleteIcon = li.querySelector(".trash-icon");
        deleteIcon.addEventListener("click", function() {
          deleteTask(li, input);
        });
      }
 
 
   
   /*************************************editTask************************************** */

   
      function editTask(li, originalText) {
        
        let input = prompt("Edit your task:", originalText);
        if (input === null || input === "") {
          alert("Please enter a task.");
        } else {
          li.innerHTML = '<i class="fa-regular fa-circle check-icon"></i> ' + input + ' <i class="fas fa-pen edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>';
          li.style.textDecoration = "none";
          let checkIcon = li.querySelector(".check-icon");
          checkIcon.addEventListener("click", function() {
            toggleCheckIcon(li, input);
          });

          let editIcon = li.querySelector(".edit-icon");
      editIcon.addEventListener("click", function() {
        editTask(li, input);
      });
      let deleteIcon = li.querySelector(".trash-icon");
      deleteIcon.addEventListener("click", function() {
        deleteTask(li, input);
      });
        }

  }
  
  /*************************************deleteTask************************************** */

  
  function deleteTask(li)
  {
       return   li.innerHTML=" ";
  }