$(document).ready(function(){
    $(".change-userImage").on('click', function(){
        var newUserImage = "images/rose-blue-flower-rose-blooms-67636.jpeg";
        $(".user-image img").attr("src", newUserImage);
    });
    function controls() {
        console.log($('.container').height() * $(this).index());
      $(this).addClass('selected').siblings('button').removeClass('selected');
      $('.slideDiv').animate({
        top: -$('.container').height() * $(this).index()
      }, 200);
    }
    
    /***Event Listeners***/
    const runCode = () => {
      const button = document.querySelectorAll('.button');
      if ( button ) {
        for ( var i = 0; i < button.length; i++ ) {
          button[i].addEventListener('click', controls, false);
        }
      }
    }
    runCode();
});
