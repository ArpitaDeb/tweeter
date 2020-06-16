
$(document).ready(function(){
  $("textarea").keyup(function() {
    const characterCount = 140 - $(this).val().length;
    $(".counter").text(characterCount);
    console.log($(this).val().length);
    console.log(characterCount);
    if (characterCount < 0) {
      $(".counter").addClass("charlimit");
    } else $(".counter").removeClass("charlimit");
  });
});