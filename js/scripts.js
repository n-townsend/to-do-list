function newItem(){

    //Add new item to the list of items: 
    
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
    
    if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    
     //2. Enable crossing out an item from the list of items:

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

     //Add a delete button: 
     let crossOutButton = $('<crossOutButton></crossOutButton>');
     crossOutButton.append(document.createTextNode('X'));
     li.append(crossOutButton);

     //CSS Link to delete button class 
     crossOutButton.on("click", deleteListItem);
     function deleteListItem(){
           li.addClass("delete")
       }
     //Allows item sorting 
    
     $('#list').sortable();
    
    }

    $('#input').keydown(function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        newItem();
      }
    });