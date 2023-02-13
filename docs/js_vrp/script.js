$(window).on("load",function(){
  $(".loaderscreen").fadeOut("fast");
  $(".pagecontent").fadeIn("fast");
  $(function () {
        $(".twentytwenty-container").twentytwenty();
    });
});

$(document).ready(function () {
  
  $('.phone_with_ddd').mask('(00) 00000-0000');
  
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.barra_nav').addClass("colorida");
        $('.barra_nav').addClass("colorida");
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

  var lastScrollTop = 0;
  navbar = document.getElementById("barra_nav");
  window.addEventListener('scroll', function () {
    navbar.style.top = "0";
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-85px";
    }

    lastScrollTop = scrollTop;

  })

  $('.dropdown-el').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('expanded');
    $('#' + $(e.target).attr('for')).prop('checked', true);
  });
  $(document).click(function () {
    $('.dropdown-el').removeClass('expanded');
  });
  

});

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
      response => response.json()
  ).then((html) => {
    
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Enviado'
    })
    document.getElementById("sheetdb-form").reset();
  });
});

