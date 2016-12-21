$(function(){

	var toTop = $('<div id="toTop" title="返回顶部"></div>').appendTo($("body"));
	// 滚动事件
	$(window).scroll(function(event) {
		var scrollTop = $("body").scrollTop();
		if (scrollTop > 100) {
			// 回到顶部淡入
			$("#toTop").fadeIn(500);
			// 左侧导航栏回到顶部
			$("#sidebar").stop().animate({top: 0}, 50);
		} else {
			// 回到顶部淡入
			$("#toTop").stop().fadeOut(500);
			// 左侧导航栏回到原来的位置
			$("#sidebar").stop().animate({top: 120}, 50);
		}
	});
	// 点击回到顶部
	$("#toTop").on("click", function () {
		$("body,html").stop().animate({scrollTop: 0}, 200);
	});

	// 点击工具箱滑动到对应模块（动画效果）
	$("#menu li").on("click", function () {
		// 左侧工具栏的项目的索引
		var idx = $(this).index();
		var sectionTop = $(".section").eq(idx).offset().top;
		$("body,html").stop().animate({scrollTop: sectionTop}, 500);
	});
});