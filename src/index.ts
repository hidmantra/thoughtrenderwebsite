import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";


import { GalleryStripModal } from "./components/gallery_strip_modal/GalleryStripModal";


/**
 * The TR basic logo that appears on header bar when header is collapsed
 */
const SimpleLogo = require('./images/THR-white.png');
let myLogo = new Image();

/**
 * The full circular Thought Render logo
 */
const Logo = require('./images/logo_thr_circle.png');
let headerLogo = new Image();

let _mediumHolder:HTMLElement;
let firstRun:boolean = true;



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
    _mediumHolder = document.getElementById('medium-holder')!;
    
    addComponents();
});

/**
 *  Add components to the DOM
 */
function addComponents():void
{
   
    let galleryStripModal:GalleryStripModal = new GalleryStripModal();
   
    galleryStripModal.appendComponent(_mediumHolder);
    
   let screenCovered = ()=>{
       console.log("bingo");
       $('.navbar').hide();
    };
    let screenUncovered = ()=>{
        $('.navbar').show();
    }
    
   galleryStripModal.CoverUp.on(screenCovered);
   galleryStripModal.CoverDown.on(screenUncovered);
}




window.addEventListener("resize", windowResize);

window.addEventListener("scroll", windowScroll);

/**
 * Called when the user resizes the window
 */
function windowResize()
{
    //adjust logo size based on screen width
    if(window.innerWidth < 420)
    {
        myLogo.width = 40;
    }
    else
    {
        myLogo.width = 50;
    }
    
}

/**
 * Called when the user scrolls
 */
function windowScroll()
{
    let windowScrollPositon = $(window).scrollTop();
    // show small logo on navbar on small devices
    if (windowScrollPositon){
        if( windowScrollPositon > 150)
    {
        if($(myLogo))
        {
            if(firstRun)
            {
                $(myLogo).appendTo("#simple-logo-holder");
                firstRun = false;
            }
            $(myLogo).show("slow")
        }
        else
        {
            
        }
        
    }
    else
    {   // if the header is visible then the small logo shouldn't show
        if($(myLogo))
        {
            $(myLogo).hide("slow");
        }
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
