/*Mobile navbar*/
$(document).ready(function(){
      $(".nav-menu, .mobile-nav").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 1400);
      });
          
          var modal = document.getElementById('myModal');
var img = document.getElementsByClassName('img-pop-home');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
    for(let i=0 ;i<img.length;i++){
      img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; 
      }
    }
          

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function(){
    modal.style.display = "none";
  }
  });
/**/
$(window).scroll(function() 
{
  if ($(this).scrollTop() > 30){  
     $('header').addClass("header-sticky");
     $('header').removeClass("header");
  }else{
     $('header').removeClass("header-sticky");
     $('header').addClass("header");
  }
  if(($(this).scrollTop()> $("#coffee").offset().top - $("#coffee").height()/2)&& $("#coffee").width()>500 || ($(this).scrollTop()> $("#coffee").offset().top-50)&& $("#coffee").width()<500)
     $(".coffe-buy").css({'opacity': '1'});
  if(($(this).scrollTop()> $("#blog").offset().top - $("#blog").height()/2)&& $("#blog").width()>500 || ($(this).scrollTop()> $("#blog").offset().top-50)&& $("#blog").width()<500)
     $("#blog").css({'opacity': '1'});
   
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}