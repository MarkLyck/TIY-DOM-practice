var $input = $('#input');
var $add = $('#add');
var $wBuilder = $('.word-builder');

$add.on('click', function(){
  var liHTML = '<li>' + $input.val() + '</li>';
  var $li = $(liHTML);
  $wBuilder.append($li);
  $input.val('');
});
