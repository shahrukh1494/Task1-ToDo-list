  window.onload = function() {

  let sub = document.getElementById("addbtn");
  sub.addEventListener("click", function () {
    let div = document.createElement("div");

    let li = document.createElement("li"); //create li tag        
    let newInput = document.getElementById("todoitem").value; //store input
    let text = document.createTextNode(newInput); //input to text node
    li.appendChild(text); //append li tag to input    
    div.appendChild(li);
    div.classList.add("liblocks");

    if (newInput.trim() === "") { //check if input box empty
      alert("Please write something to add to list");
    }
    else {
      document.getElementById("list").appendChild(div); //add list item to list
    }
    document.getElementById("todoitem").value = ""; //clear input box


    //add edit button with list item
    let edit = document.createElement("button");
    edit.innerHTML = "edit";
    edit.classList.add('edit');
    div.appendChild(edit);

    //add delete button with list item
    let del = document.createElement("button");
    del.innerHTML = "delete";
    del.classList.add('delete');
    div.appendChild(del);

    //delete list item on clicking delete button
    del.addEventListener("click", function () {
      div.style.display = "none";
    });

    //strike text on clicking list item
    li.addEventListener("click", function () {
      li.classList.toggle("strike");
    });

    //edit list item on clicking edit button
    edit.addEventListener("click", function () {
      document.getElementById("todoitem").value = li.innerHTML;
      div.style.display = "none";
    });

  }

  );

    //Press Enter to submit
    document.getElementById("todoitem").addEventListener("keypress", function(e) {
      if (e.keyCode == 13) {
          e.preventDefault();
          sub.click();
        }
    });
}