(function() {
  let b = $("#button");
  let w = $("#wrapper");
  let l = $("#list");

  w.height(l.outerHeight(true));

  b.click(function() {

    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }

  });
});
