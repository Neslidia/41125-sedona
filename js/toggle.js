

$(".page-header__toggle").on("click", function(){
  $(".page-header__wrap").toggleClass("page-header__wrap--open");
  $(".page-header__list").toggle();
});


document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });



//   $(".page-nav__toggle").on("click", function(){
//   $(".page-header__wrap").toggleClass("page-header__wrap--open");
//   $(".page-nav__list").toggle();
// });


// document.querySelector( "#nav-toggle" )
//   .addEventListener( "click", function() {
//     this.classList.toggle( "active" );
//   });