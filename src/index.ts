import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";


import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";



const SimpleLogo = require('./images/THR-white.png');

let myLogo = new Image();

const Logo = require('./images/logo_thr_circle.png');

let headerLogo = new Image();







declare var module: any;

let element:HTMLElement;

let windowScrollPositon:Number;

/**
 * Fires when everything is loaded and ready to GO!
 */
document.addEventListener("DOMContentLoaded", function(event):void 
{ 
    //document.body.appendChild(component());

    console.log("test hot = " + module.hot);

    
    myLogo.src = SimpleLogo;
    myLogo.width = 50;

    
    headerLogo.src = Logo;
    headerLogo.width = 120;
    /*
    let adenThumb = new Image();
    adenThumb.src = AdenThumb;
    adenThumb.width = 200;
    $(adenThumb).appendTo('#multi-thumbs');
    
     let temp:string="hi";
     adenThumb.addEventListener("click", function(){ launchAden(temp) });
    

    let htmlText:string="<video width='600' loop autoplay ><source src='./adendesktop.mp4' type='video/mp4'></video>";
    $('.modal-body').html(htmlText);
*/

    $(headerLogo).appendTo("#logo-holder");
    $('.main-title').html("Thought Render");

    addComponents();


});

function addComponents():void
{
    let galleryStripModal:GalleryStripModal = new GalleryStripModal();
    let multimediaGalleryHTML:string = galleryStripModal.getComponentHTML();
    $(multimediaGalleryHTML).insertAfter('.medium-holder');
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
        $(myLogo).appendTo( ".navbar-brand" );
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
     