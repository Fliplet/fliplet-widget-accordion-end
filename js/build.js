Fliplet.Widget.instance('collapse-end', function() {
  var $container = $(this);

  Fliplet().then(function() {
    $container.translate();
  });
});
