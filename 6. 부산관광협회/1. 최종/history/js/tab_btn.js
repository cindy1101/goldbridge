//연혁 탭 버튼
$(document).ready(function() {
    $(".tab_btn").click(function() {
        var index = $(this).parent().index();
        $(".tab_btn").removeClass("fill");
        $(".tab_btn").eq(index).toggleClass("fill");
        $(".histoy_sheet").removeClass("show_sheet").hide();
        $(".histoy_sheet").eq(index).fadeIn().toggleClass("show_sheet");
    });
});
