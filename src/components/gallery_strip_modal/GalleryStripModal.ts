import * as $ from "jquery";
//const AdenVideoDesktop = require('./video/adendesktop.mp4');
const AdenVideoDesktop = require('./video/adendesktop.mp4')
const AdenVideoDesktopLg = require('./video/adendesktoplg.mp4');
const AdenThumb = require('./images/aden_large_thumb400.jpg');

export class GalleryStripModal
{
    

    constructor()
    {
        console.log('GSM class built');
    }

    public getComponentHTML():string
    {
        let titleElement:string = "<div class='medium-title'>Multimedia</div>";
        let holderString:string = "<div class='portfolio-medium'><div id='multi-thumbs' class='thumb-strip'>";
        
        let adenThumb = new Image();
        adenThumb.src = AdenThumb;
        adenThumb.width = 200;
        //convert element to string to add to component html string
        let tmpElement:HTMLElement = document.createElement("div");
        $(adenThumb).appendTo(tmpElement);
        
        let tmpThumb:string = tmpElement.innerHTML;
        let closeString:string = "</div></div></div>";
        
        let strip:string = titleElement + holderString + tmpThumb + closeString;
        

       // let temp:string="hi";
       // adenThumb.addEventListener("click", function(){ launchAden(temp) });
        adenThumb.addEventListener("click", this.launchAden);

        let htmlText:string="<video width='600' loop autoplay ><source src='./adendesktop.mp4' type='video/mp4'></video>";
        $('.modal-body').html(htmlText);
        console.log("img html: " + tmpElement.innerHTML);
        return strip;
    }

    private getModalHTML( 
                            modalID:string, 
                            modalHeading:string,
                            
                        ):string
    {
        //let modalID:string = 
        let tmpStringHtml1:string;
        let modalHTML:string ="<div class='modal fade' id='myModal'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>Modal Heading</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div id='#test' class='modal-body'></div><div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button></div></div></div>";

        return modalHTML;
    }

    private launchAden():void
    {
        console.log("tmp is");
        $("#myModal").modal();
    }
}
