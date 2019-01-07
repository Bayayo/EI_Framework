window.onload = function() {

    hiddenAllcontent();
    /*
    loader();
    */
    setTimeout( function () {
            iniciaApp();
        }, 500);


};


var hiddenAllcontent = function(){

   $('#page-init , #page-kit , #page-componentes , #page-rulers , #page-colors').addClass('hidden');

}


var iniciaApp = function () {

    //removeloader();
    $("#page-init").removeClass('hidden');

    /*
    initTl = new TimelineMax();

    initTl
        .to("header", 0.7, { top:0, display: 'block', ease: Sine.easeIn })
        .to("#kit", 0.2, { top:0, className:'-=hidden', ease: Sine.easeIn })
        .to(".imagotipo", 0.3, { opacity: 1, marginTop: "50px", ease: Sine.easeIn })
        .to(".index", 0.3, { opacity: 1, marginTop: "0px", ease: Sine.easeIn })
        .to("#boxInicial", 0.3, { opacity: 1, className:'-=hidden' , marginTop: "0px", ease: Sine.easeIn });
    */
};


var navButtons = (function(){
    $('.isotipo, .header-text').click(function () {
        hiddenAllcontent();
        $("#page-init").removeClass('hidden');
    });

    $('header nav ul li').click(function () {

            hiddenAllcontent();

            var index = $(this).index();

            switch (index) {
                case 0:
                    $("#page-kit").removeClass('hidden');

                break;

                case 1:
                    $("#page-componentes").removeClass('hidden');

                    break;

                case 2:
                    $("#page-rulers").removeClass('hidden');

                 break;

                 case 3:
                    $("#page-colors").removeClass('hidden');

                 break;

                default:
                    break;
            }
        });
})();
