$(function(){
	//设置轮播图翻页箭头居中显示
	$('.carousel-control').css('line-height',$('.carousel-inner img').height() + 'px');
	$(window).resize(function(){
		var $height = $('.carousel-inner img').eq(0).height() || $('.carousel-inner img').eq(1).height() || $('.carousel-inner img').eq(2).height();
		$('.carousel-control').css('line-height',$height + 'px');
	});

	//设置轮播图动画
	$('.carousel').carousel({
		interval: 4000		//动画间隔4s
	});
	//启动滚动监听
	$('body').scrollspy({target: '#navbar-collapse'});

	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	});
});
