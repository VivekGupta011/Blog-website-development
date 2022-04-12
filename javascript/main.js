$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse==$('.toggle-collapse');

    // click event on toggle button
    $toggleCollapse.click(function(){
        $nav.toggleCollapse('.collapse');
    })
   //owl carousel for blog
   $('.owl-carousel').owlCarousel();
});