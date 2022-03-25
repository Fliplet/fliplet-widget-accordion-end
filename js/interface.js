Fliplet().then(function() {
  $(window).on('resize', Fliplet.Widget.autosize);

  // Fired from Fliplet Studio when the external save button is clicked
  Fliplet.Widget.onSaveRequest(function() {
    Fliplet.Widget.complete();
  });
});
