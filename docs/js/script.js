// MUDA COR SCROLL
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.barra_nav').addClass("colorida");
            $('.barra_nav').addClass("colorida");
            // console.log('Scroll')
        }else{
            $('.barra_nav').removeClass("colorida");
            $('.barra_nav').removeClass("colorida");
        }
      })
      $('.opcoes').click(function(){
        $('.barra_nav .menu').toggleClass("on")
        $('.opcoes i').toggleClass("on")
      });

      $('.sair').click(function(){
        $('.barra_nav .menu').toggleClass("on")
        $('.opcoes i').toggleClass("on")
        });

      var typed = new Typed(".typing",{
        strings: ["Student", "Program ", "Hacke", "Game", "Develop"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
});
//

// MINHA FUNÇÃO
document.addEventListener( "click", function TrocaPalavras ( event ) {
    var target = event.target, values = [], placed;
    if ( target.hasAttribute( "data-values" ) ) {
        values = target.getAttribute( "data-values" ).split( "," );
        placed = values.indexOf( target.textContent );
        target.textContent = values[ ++placed % values.length ];
    }
});

document.querySelector('#myButton').addEventListener('click', function(event) {
  event.preventDefault();
});
