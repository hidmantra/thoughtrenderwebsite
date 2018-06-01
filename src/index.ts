import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";

import "../dist/main.css";

const Logo = require('./images/logo_thr_circle.png');

/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 
    document.body.appendChild(component());

    document.body.appendChild(componentO());



});

function component() 
{
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack w/typscript bout time but no sass :('], ' ');
  
    element.classList.add('hello');

    let myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo);

    return element;
}

function componentO() 
{
    let elementO = document.createElement('div');
    elementO.innerHTML = _.join(['Hello', 'SASS'], ' ');
  
    elementO.classList.add('helloWorld');
    return elementO;
}
  
  