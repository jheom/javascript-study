/*
- Author : Jaeho Sim
- Email : bvlgarikool@gmail.com
*/

$(document).ready(function() {

	tab1();

	tab2();

	faq();

});

$(window).load(function() {

	// sidebar & content Auto Height
	sidebarHeightCalcurate()

});


function sidebarHeightCalcurate() {

	var $sidebar = $("#sidebar");
	var $content = $("#content");
	var $relatedInfo = $("#sidebar").find(".relatedInfo");

	if ( $sidebar.height() > $content.height() ) {
		$content.height($sidebar.height());
	} else {
		$sidebar.height($content.height());
	}

}

function tab1() {

	var $trigger = $("#content .tabStyle01 li a");
	var $cont = $("#content .tabStyle01Cont");

	$trigger.each(function() {
		var imgOn = $(this).find("img").attr("src").replace("_off","_on");
		var imgOff =$(this).find("img").attr("src").replace("_on","_off");
		var $thisCont = $($(this).attr("href"));
		$(this).click(function() {
			$cont.hide();
			$trigger.each(function() {
				var allOff = $(this).find("img").attr("src").replace("_on","_off");
				$(this).find("img").attr("src", allOff);
			});
			$(this).find("img").attr("src", imgOn);
			$thisCont.show();
			return false;
		});
	});

}

function tab2() {

	var $trigger = $("#content .tabStyle02 li");
	var $cont = $("#content .tabStyle02Cont");

	$trigger.eq(0).addClass("hover");
	$cont.eq(0).show();

	$trigger.each(function(i) {

		$(this).click(function() {

			$trigger.removeClass("hover");
			$(this).addClass("hover");
			$cont.hide();
			$cont.eq(i).show();

			return false;

		});

	});

}

function faq() {
	var $faq = $(".tabStyle02Cont.faqStyle");
	var $trigger = $faq.find(".question").find("a");
	var $cont = $faq.find(".answer");
	var $closer = $cont.find(".btnHide").find("a");

	$trigger.each(function() {
		$(this).click(function() {
			$(this).parents(".question").next().show();
		});
	});

	$closer.each(function() {
		$(this).click(function() {
			$(this).parents(".answer").hide();
		});
	});



}