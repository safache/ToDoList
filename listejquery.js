
/*************************************addTask************************************** */
/*document.addEventListener("DOMContentLoaded", function() {*/
function addTask() { 
    var input = $("#taskInput").val(); 
    var ul = $("#taskList"); 
    
    if (input == "") {
        alert("Please enter a task.");
    } else {
        let li =$('<li>');
        li.html ( '<i class="fa-regular fa-circle check-icon" ></i> '+input+'<i class="fa-regular fa-pen-to-square edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>');
        
        let checkIcon =$(li).find('.check-icon');
        checkIcon.on('click', function() {
            toggleCheckIcon(li, input);
        });

        let editIcon = $(li).find('.edit-icon');
        editIcon.on("click", function() {
            editTask(li, input);
        });

        let deleteIcon = $(li).find(".trash-icon");
        deleteIcon.on("click", function() {
            deleteTask(li);
        });
        ul.append(li); 
       $("#taskInput").val()= ''; 
    }
}

var input = $("#taskInput"); 
input.on("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});




function toggleCheckIcon(li, input) {
    if ($(li).find(".check-icon").hasClass("fa-circle")) {
      $(li).css('textDecoration','line-through') ;
      li.html  ('<i class="fa-regular fa-circle-check check-icon"></i> ' + input + ' <i class="fa-regular fa-pen-to-square edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>');
    } else {
      $(li).css('textDecoration' , 'none');
      li.html ('<i class="fa-regular fa-circle check-icon"></i> ' + input + ' <i class="fa-regular fa-pen-to-square edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>');
    }
  
    let newCheckIcon = $(li).find(".check-icon");
    newCheckIcon.on("click", function() {
      toggleCheckIcon(li, input);
    });
  
    let newEditIcon = $(li).find(".edit-icon");
    newEditIcon.on("click", function() {
      editTask(li, input);
    });

    let deleteIcon = $(li).find(".trash-icon");
    deleteIcon.on("click", function() {
      deleteTask(li, input);
    });
  }



/*************************************editTask************************************** */


  function editTask(li, originalText) {
    
    let input = prompt("Edit your task:", originalText);
    if (input === null || input === "") {
      alert("Please enter a task.");
    } else {
      li.html('<i class="fa-regular fa-circle check-icon"></i> ' + input + ' <i class="fas fa-pen edit-icon"></i><i class="fa-regular fa-trash-can trash-icon"></i>');
      $(li).css('textDecoration' , 'none');
      let checkIcon = $(li).find(".check-icon");
      checkIcon.on("click", function() {
        toggleCheckIcon(li, input);
      });

      let editIcon =  $(li).find(".edit-icon");
  editIcon.on("click", function() {
    editTask(li, input);
  });
  let deleteIcon =  $(li).find(".trash-icon");
  deleteIcon.on("click", function() {
    deleteTask(li, input);
  });
    }

}

/*************************************deleteTask************************************** */


function deleteTask(li)
{
   return   li.html('');
}