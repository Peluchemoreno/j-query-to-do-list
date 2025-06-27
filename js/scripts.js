function newItem() {


  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  };

  function strikeOut() {
    li.toggleClass('strike');
  };

  li.on('dblclick', function strikeOut() {
    li.toggleClass('strike');
  });

  let removeBtn = $('<button class="crossOutButton"></button>');
  removeBtn.append(document.createTextNode('X'));
  li.append(removeBtn);

  removeBtn.on('click', function removeItem() {
    li.addClass('delete');
  });

  $('#list').sortable();
}
