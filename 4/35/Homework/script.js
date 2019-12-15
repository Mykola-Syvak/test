$(document).ready(function() {
    $('.main_nav li:eq(1)').on('click', function() {
        showOverlay ();
    });

    $('.main_btna').on('click', function() {
        showOverlay ();
    });

    $('.main_btn').on('click', function() {
        showOverlay ();
    });

    $('.close').on('click', function() {
        showOverlay ();
    })
    
    function showOverlay () {
        console.log('show');
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, 3000
        );

        $('.modal').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000 
        );

    };
});

