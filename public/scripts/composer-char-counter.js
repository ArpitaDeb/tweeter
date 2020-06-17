$(document).ready(function() {
    $("textarea").keyup(function() {
        let $input = $(this);
        const characterCount = 140 - $input.val().length;
        //console.log($input.closest("form"));
        const $counter = $input.closest("form").find(".counter");
        $counter.html(characterCount);
        //$(".counter").text(characterCount);
        //console.log($(this));
        //console.log($(this.val()));
        //console.log($(this).val().length);
        //console.log(characterCount);
        if (characterCount < 0) {
            $counter.addClass("charlimit");
        } else $counter.removeClass("charlimit");
    });
});