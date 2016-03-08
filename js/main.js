var $li = $('li');
var $img = $('img');
var $h2 = $('h2');
var $p = $('p');
var $ul = $('ul');

$item.forEach(function (grains) {

  $h2.html(grains.name);
  $img.attr('src', 'images/' + grains.img);
  $p.html(grains.desc);

  $li.append($img, $h2, $p);
  $ul.append($li);
});
