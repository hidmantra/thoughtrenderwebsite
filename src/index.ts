import * as $ from "jquery";
(<any>window).jQuery = $

import * as _ from "lodash";

import "bootstrap";

import { Print } from "./print";

//import './styles/style.scss';

const AdenVideoDesktop = require('./video/adendesktop.mp4');
const AdenVideoDesktopLg = require('./video/adendesktoplg.mp4');

const SimpleLogo = require('./images/THR-white.png');

let myLogo = new Image();

const Logo = require('./images/logo_thr_circle.png');

let headerLogo = new Image();

const AdenThumb = require('./images/aden_large_thumb400.jpg');


let printMe:Print = new Print();



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

    let adenThumb = new Image();
    adenThumb.src = AdenThumb;
    adenThumb.width = 200;
    $(adenThumb).appendTo('#multi-thumbs');

     adenThumb.addEventListener("click", launchAden);

    //let adenVideo = new VideoTrack();

    let htmlText:string="<video width='600' loop autoplay controls><source src='./adendesktop.mp4' type='video/mp4'></video>";
    $('.modal-body').html(htmlText);

    /*
    <video loop autoplay controls>
    <source src="./aden.mp4" type="video/mp4">
    </video>
    */
   // $("<p>hello</p>").appendTo("#test");
    //$("#test").append("<p>hello</p>");

    /*
    $(".modal-body").append("<video width=\'320\' height=\'240\' autoplay\>\<source src=adenVideo type=\"video/mp4\"\>\<source src=\"movie.ogg\" type=\"video/ogg\"\>\</video>");
 
   
        $(".modal-body").append("<video width=\'320\' height=\'240\' autoplay\>\<source src=\"movie.mp4\" type=\"video/mp4\"\>\<source src=\"movie.ogg\" type=\"video/ogg\"\>\</video>");
    */

    //$(myLogo).appendTo( ".navbar-brand" );

    $(headerLogo).appendTo("#logo-holder");
    $('.main-title').html("Thought Render");

    //$(headerLogo).appendTo("#logo-holder");

    /*
    let element = component();
    document.body.appendChild(element);
    document.body.appendChild(componentO());
    */


});

function launchAden()
{
    $("#myModal").modal();
}

window.addEventListener("resize", windowResize);

window.addEventListener("scroll", windowScroll);

function windowResize()
{
    console.log("window width: " + window.innerWidth);
    console.log("window height: " + window.innerHeight);
    /*
    if(window.innerWidth < 360)
    {
        headerLogo.width = 120;
    }
    else
    {
        headerLogo.width = 120;
    }
    */
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


function component() 
{
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack w/typscript and now with live reload'], ' ');
  
    element.classList.add('hello');
    /*
    let myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo);
    */
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
     