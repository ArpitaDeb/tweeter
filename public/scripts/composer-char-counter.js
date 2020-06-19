//Character Counter

$(document).ready(function() {
    $("textarea").keyup(function() {
        let $input = $(this);
        const characterCount = 140 - $input.val().length;
        const $counter = $input.closest("form").find(".counter");
        $counter.html(characterCount);
        if (characterCount < 0) {
            $counter.addClass("charlimit");
        } else $counter.removeClass("charlimit");
    });
});