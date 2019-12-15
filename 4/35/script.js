$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, 3000
        );
    });
});


// >>> ANGULAR <<<
// 1. node.js -> npm
// 2. TypeScript
// 3. Webpack
// 4. MVC (model view controller)
// 5. Angular

// >>> REACT <<<
// 1. node.js -> npm
// 2. Babel - софт, который переписывает код из ES6 в ES5 (babeljs.io)
// 3. JSX
// 4. React
// 5. Webpack

// >>> Vue <<<
// 1. node.js -> npm
// 2. Babel - софт, который переписывает код из ES6 в ES5 (babeljs.io)
// 3. Webpack