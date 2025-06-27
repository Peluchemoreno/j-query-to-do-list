function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  function strikeOut() {
    li.toggleClass("strike");
  }

  function removeItem() {
    li.addClass("delete");
  }

  li.on("dblclick", strikeOut);

  let removeBtn = $('<button class="crossOutButton"></button>');
  removeBtn.append(document.createTextNode("X"));
  li.append(removeBtn);

  removeBtn.on("click", removeItem);

  $("#list").sortable();
}
