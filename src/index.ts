import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";

import { Print } from "./print";

//import './styles/style.scss';

const Logo = require('./images/logo_thr_circle.png');

let printMe:Print = new Print();

declare var module: any;

let element:HTMLElement;

/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 
    //document.body.appendChild(component());

    console.log("test hot = " + module.hot);

    let element = component();
    document.body.appendChild(element);
    document.body.appendChild(componentO());



});

function component() 
{
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack w/typscript and now with live reload'], ' ');
  
    element.classList.add('hello');

    let myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo);

    let btn = document.createElement('button');
    btn.innerHTML = 'Click for console';
    btn.onclick =  printMe.printer;
    
    element.appendChild(btn);

    return element;
}

function componentO() 
{
    let elementO = document.createElement('div');
    elementO.innerHTML = _.join(['Hello', 'SASS with live edits?'], ' ');
  
    elementO.classList.add('helloWorld');
    return elementO;
}



if (module.hot) {
       module.hot.accept('./print.ts', function() {
         console.log('Accepting the updated printMe module!');
         document.body.removeChild(element);
         element = component();
         document.body.appendChild(element);
         //printMe.printer();
       })
}
     