$(document).ready(function () {
    $('.carousel-wrapper').slick({
        arrows: true,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
        mobileFirst: true,
        dots: false
    });
});


function clean(node) {
    for (let n = 0; n < node.childNodes.length; n++) {
        const child = node.childNodes[n];
        if (
            child.nodeType === 8 ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        } else if (child.nodeType === 1) {
            clean(child);
        }
    }
}

clean(document.body);


$(".classes-nav ul li a").click(function () {
    $("li.active").removeClass("active");
    $(event.target).parent().addClass("active");
    var index = $('li.active').index();
    $(".c-card.c-active").removeClass("c-active");
    $('.c-card-wrapper').children().eq(index).addClass("c-active");
})



