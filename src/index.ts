import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";

import "./style.css";


/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 
    document.body.appendChild(component());
    


});

function component() 
{
    //var element = document.createElement('div');
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack w/typscript bout time but no sass :('], ' ');
  
    element.classList.add('hello');
    return element;
  }
  
  