$(document).ready(function() {
  $(".user-name").keypress(function(e) {
    if (e.which === 13) {
      let value = e.target.value;
      if (!value) return;
      $(".user-name").fadeOut(function() {
        $(".greeting").html(`Hello ${value}.`);
      });
    }
  });
});
