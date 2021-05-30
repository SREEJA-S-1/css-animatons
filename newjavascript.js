/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        window.onscroll = function() {myFunction();};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky && $(document).scrollTop() > 50) {
    navbar.classList.add("sticky");
    $('nav').addClass('transparent');
  } else {
    navbar.classList.remove("sticky");
    $('nav').removeClass('transparent');
  }
  window.onscroll =hover(transparent);
  }
var images = "", count = 50;
for(var i = 1; i <= count; i++)
	images += '<img src="http://thecodeplayer.com/u/uifaces/'+i+'.jpg" />';
	
//appending the images to .grid
$(".grid").append(images);

var d = 0; //delay
var ry, tz, s; //transform params

//animation time
$(".grid").on("mouseenter", function(){
	//fading out the thumbnails with style
	$("img").each(function(){
		d = Math.random()*1000; //1ms to 1000ms delay
		$(this).delay(d).animate({opacity: 0}, {
			//while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
			step: function(n){
				s = 1-n; //scale - will animate from 0 to 1
				$(this).css("transform", "scale("+s+")");
			}, 
			duration: 1000, 
		})
	}).promise().done(function(){
		storm()
	})
})
//bringing back the images with style
function storm()
{
	$("img").each(function(){
		d = Math.random()*1000;
		$(this).delay(d).animate({opacity: 1}, {
			step: function(n){
				//rotating the images on the Y axis from 360deg to 0deg
				ry = (1-n)*360;
				//translating the images from 1000px to 0px
				tz = (1-n)*1000;
				//applying the transformation
				$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
			}, 
			duration: 3000, 
			//some easing fun. Comes from the jquery easing plugin.
			easing: 'easeOutQuint', 
		})
	})
}
