$(window).on('load' ,function(){
	$('.specifications-form').fadeOut()

	$('.preorder-moto-btn').click(function(){
		$('.specifications-form').fadeToggle()
	})

})



function windowSize(){
	    if ($(window).width() <= 480){
	        
	    	$('.team-box').addClass('owl-carousel')
	    	$('.more-story-container').addClass('owl-carousel')

	      	$(".team-box , .more-story-container").owlCarousel({
		  		items : 1,
		  		dots : true
		  		// dotClass : 'moto-dots'
   			});
	    } 
	    
	}

	$(window).on('load resize',windowSize);




var dropBtn = document.querySelector('.drop-btn');
var menu = document.querySelector('.menu');

var stickTop = document.querySelector('.stick-top');
var stickMid = document.querySelector('.stick-mid');
var stickBot = document.querySelector('.stick-bot');

dropBtn.addEventListener('click' , show)

function show(){
	menu.classList.toggle('show')
	stickTop.classList.toggle('top-move');
	stickMid.classList.toggle('mid-move');
	stickBot.classList.toggle('bot-move');

	if($('.nav > ul').hasClass('show')){
		$('.logo > a > .logo-mob').addClass('logo-show')
		$('.logo > a > .logo-pc').addClass('logo-hide')
	}
	else{
		$('.logo > a > .logo-mob').removeClass('logo-show')
		$('.logo > a > .logo-pc').removeClass('logo-hide')
	}
}

	




var inputShadow = document.querySelector('.sub-news-container > form > label > input');

inputShadow.addEventListener('focus' , inputFocus)
inputShadow.addEventListener('blur' , inputBlur)

function inputFocus(){
	this.classList.add('focus');
}

function inputBlur(){
	this.classList.remove('focus');
}

 $(window).scroll(function(){

	var fix = $('.nav')

	if($(this).scrollTop() > 300){
		fix.addClass('fix')

	}
	else{
			fix.removeClass('fix')
		}

	if($(".nav").hasClass('fix')){
		$('.logo > a > .logo-mob').addClass('logo-show')
		$('.logo > a > .logo-pc').addClass('logo-hide')

	}
	else{
		$('.logo > a > .logo-mob').removeClass('logo-show')
		$('.logo > a > .logo-pc').removeClass('logo-hide')
	}

	
})

