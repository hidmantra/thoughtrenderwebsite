import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";


import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";



const SimpleLogo = require('./images/THR-white.png');

let myLogo = new Image();

const Logo = require('./images/logo_thr_circle.png');

let headerLogo = new Image();


let _mediumHolder:HTMLElement;





declare var module: any;

let element:HTMLElement;

let windowScrollPositon:Number;

/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 

    console.log("document loaded");

    
    myLogo.src = SimpleLogo;
    myLogo.width = 50;

    
    headerLogo.src = Logo;
    headerLogo.width = 120;

    $(headerLogo).appendTo("#logo-holder");
    $('.main-title').html("Thought Render");
    _mediumHolder = document.getElementById('medium-holder');
    
    addComponents();


});

function addComponents():void
{
    let galleryStripModal:GalleryStripModal = new GalleryStripModal();
   
    galleryStripModal.appendComponent(_mediumHolder);
}




window.addEventListener("resize", windowResize);

window.addEventListener("scroll", windowScroll);

function windowResize()
{
    //console.log("window width: " + window.innerWidth);
    //console.log("window height: " + window.innerHeight);
    
    if(window.innerWidth < 420)
    {
        myLogo.width = 40;
    }
    else
    {
        myLogo.width = 50;
    }
    
}


function windowScroll()
{
    windowScrollPositon = $(window).scrollTop();
    // show small logo on navbar on small devices
    if( windowScrollPositon > 150)
    {
        
        
    }
    else
    {
        if($(myLogo))
        {
            $(myLogo).detach();
        }
    }
}


/*
if (module.hot) {
       module.hot.accept('./GalleryStripModal.ts', function() {
         console.log('Accepting the updated GSM module!');
         document.body.removeChild(element);
         element = addComponents();
         document.body.appendChild(element);
       })
}
*/
     