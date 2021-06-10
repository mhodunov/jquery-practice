$(function () {
  $('#add').on('click', function() {
    var value = $('input').val();
    if(value == '') return;
    var newTask = $('<li class="todo-task"></li>').text(value);
    $(newTask).append('<button id="remove" class="todo-button remove">Remove</button>');
    $('#myList').append(newTask);
    $('input').val('');
  })
})