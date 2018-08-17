function addLi() {
  if (event.keyCode === 13) {
    var ul = document.getElementById("myToDoList");
    var todoText = document.getElementById("todoText");
    var li = document.createElement("li");
    li.setAttribute('id', todoText.value);
    li.appendChild(document.createTextNode(todoText.value));
    ul.appendChild(li);
    document.getElementById("todoText").value = ""
  }
}
