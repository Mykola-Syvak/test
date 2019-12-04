'use strict';
/*jshint esversion: 6 */
/*jshint devel:true */

class Options {
    constructor(height = '100px', width = '100px', bg = 'green', fontSize = '30px', textAlign = 'right') {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    divCreate(text) {
        let div = document.createElement('div');
        div.innerHTML = text;     
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.style.height = this.height;
        div.style.width = this.width;
        document.body.append(div);

    }
}

let hello = new Options('100px', '300px', 'red', '30px', 'right');
hello.divCreate('Hello World!!!');
