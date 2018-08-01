import * as $ from "jquery";
//const AdenVideoDesktop = require('./video/adendesktop.mp4');
const AdenVideoDesktop = require('./video/adendesktop.mp4');
const AdenVideoDesktopLg = require('./video/adendesktoplg.mp4');
const AdenThumb = require('./images/aden_large_thumb400.jpg');
import {JsonObject, JsonMember, TypedJSON} from 'typedjson-npm';
import { GSM_vo } from "./GSM_vo";

export class GalleryStripModal
{
    private tmpJson = {

        "componentTitle" : "Multimedia",
        "componentID" : 1,
        "job_vos" : [
            {
                "jobTitle" : "Aden",
                "position" : 1,
                "thumbPath" : "AdenThumb",
                "videoPath" : "./adendesktop.mp4"
            },
            {
                "jobTitle" : "Aden2",
                "position" : 2,
                "thumbPath" : "AdenThumb2",
                "videoPath" : "./adendesktop2.mp4"
            }
        ]
    }

    private gsm_vo:GSM_vo = new GSM_vo();
     

    constructor()
    {
        console.log('GSM class built');
    }

    public getComponentHTML():string
    {
        //convert json object into a GSM_vo
        this.gsm_vo = TypedJSON.parse(TypedJSON.stringify(this.tmpJson) , GSM_vo);


        //first handle data for overall component

        //create the label for the component
        let titleElement:string = "<div class='medium-title'>" +this.gsm_vo.componentTitle + "</div>";

        //append compoent id to div id to target current component if their are multiple GSMs
        let holderString:string = "<div class='portfolio-medium'><div id='GSM-" + this.gsm_vo.componentID +"' class='thumb-strip'>";
        
        //grab Job_vos out and build each thumb and corresponding popup modal data
        for(let tmpJobVO of this.gsm_vo.job_vos)
        {
            console.log("titles: " + tmpJobVO.jobTitle);
        }
        
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
