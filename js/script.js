$(document).ready(function(){
	$('.team__slider').slick({
		arrows: false,
		slidesToShow: 3,
		initialSlide: 1,
		centerMode:true,
		centerPadding: 0,
		infinite: true,
	});
	$('.what__coms').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 1,
	});
	//CHECKBOX
	$(document).on('click', '.contact__subscrabe', function(event){
		$(this).toggleClass('active');
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked', true);
		}else{
			$(this).find('input').prop('checked', false);
		};
		return false;
	});
});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
	body.classList.add('touch');
}else{
	body.classList.add('mouse');
};

		let listHead=document.querySelectorAll('.service__row');
for(i=0; i<listHead.length; i++){
		let thisHead=listHead[i];

	listHead[i].addEventListener('click', function(){
		thisHead.classList.toggle('open');
		let opened=$('.open').length;
		if(opened>1){
			$('.service__row').removeClass('open');
			thisHead.classList.add('open');
		};
	});
};
