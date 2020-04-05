// FAQ
var faq_content = $(".faq__content");
faq_content.each(function () {
    $(this).css({ "--height": $(this).find(">").outerHeight() });
});

$(document).on("click", ".faq__summary", function () {
    const clause = $(this).parent();
    $(".faq__clause").not(clause).removeClass("faq__clause--deployed");
    clause.toggleClass("faq__clause--deployed");
});

// THE REST