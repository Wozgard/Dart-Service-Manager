$(document).ready(function(){
	let $width = $(window).width();
	if($width <=600){
		const head = document.head;
		const meta = document.querySelector('meta[name="viewport"]');
		const content = meta.getAttribute('content');
		const newMeta = document.createElement('meta');

		newMeta.setAttribute('name', 'viewport');
		newMeta.setAttribute('content', content.replace(/width=([^,]+),/i, 'width=600,'));

		head.removeChild(meta);
		head.appendChild(newMeta);
		$("body").css("width","600px");
	} else{
		$('[name="viewport"]').attr('content','width=device-width');
		$("body").css("min-width","0");
	}
}