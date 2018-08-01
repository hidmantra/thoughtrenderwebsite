import * as $ from "jquery";
//const AdenVideoDesktop = require('./video/adendesktop.mp4');
const AdenVideoDesktop = require('./video/adendesktop.mp4');
const AdenVideoDesktopLg = require('./video/adendesktoplg.mp4');
const TmpThumb = require('./images/aden_large_thumb400.jpg');
import {JsonObject, JsonMember, TypedJSON} from 'typedjson-npm';
import { GSM_vo } from "./GSM_vo";
import { Job_vo } from "./Job_vo";

export class GalleryStripModal
{
    private tmpJson = {

        "componentTitle" : "Multimedia",
        "componentID" : 1,
        "thumbWidth" : 200,
        "job_vos" : [
            {
                "jobTitle" : "Aden",
                "position" : 1,
                "thumbPath" : "gsm_assets/images/aden_large_thumb400.jpg",
                "videoPath" : "./adendesktop.mp4"
            },
            {
                "jobTitle" : "Levaquin",
                "position" : 2,
                "thumbPath" : "gsm_assets/images/levaquin_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 1",
                "position" : 3,
                "thumbPath" : "gsm_assets/images/sawaya1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 2",
                "position" : 4,
                "thumbPath" : "gsm_assets/images/sawaya2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "GoFur Help",
                "position" : 5,
                "thumbPath" : "gsm_assets/images/gofur_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Pantene 1",
                "position" : 6,
                "thumbPath" : "gsm_assets/images/pantene1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Evian 1",
                "position" : 7,
                "thumbPath" : "gsm_assets/images/evian1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "MOMA",
                "position" : 8,
                "thumbPath" : "gsm_assets/images/moma_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Evian 2",
                "position" : 9,
                "thumbPath" : "gsm_assets/images/evian2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "KOHLS",
                "position" : 10,
                "thumbPath" : "gsm_assets/images/kohls_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Nortel 1",
                "position" : 11,
                "thumbPath" : "gsm_assets/images/nortel1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Pantene 2",
                "position" : 12,
                "thumbPath" : "gsm_assets/images/pantene2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Nortel 2",
                "position" : 13,
                "thumbPath" : "gsm_assets/images/nortel2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Trump Place 1",
                "position" : 14,
                "thumbPath" : "gsm_assets/images/trump1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Trump Place 2",
                "position" : 15,
                "thumbPath" : "gsm_assets/images/trump2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Synnex",
                "position" : 16,
                "thumbPath" : "gsm_assets/images/synnex_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Plavix",
                "position" : 17,
                "thumbPath" : "gsm_assets/images/plavix_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 3",
                "position" : 18,
                "thumbPath" : "gsm_assets/images/sawaya3_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "HPV 1",
                "position" : 19,
                "thumbPath" : "gsm_assets/images/hpv1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "HPV 2",
                "position" : 20,
                "thumbPath" : "gsm_assets/images/hpv2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Carestream",
                "position" : 21,
                "thumbPath" : "gsm_assets/images/carestream_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "GTS",
                "position" : 22,
                "thumbPath" : "gsm_assets/images/gts_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "DLJ",
                "position" : 23,
                "thumbPath" : "gsm_assets/images/dlj_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "EISAI",
                "position" : 24,
                "thumbPath" : "gsm_assets/images/eisai_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            }
            
        ]
    }

    private gsm_vo:GSM_vo = new GSM_vo();
    private thumbWidth:number;
     

    constructor()
    {
        console.log('GSM class built');
    }

    public getComponentHTML():string
    {
        //convert json object into a GSM_vo
        this.gsm_vo = TypedJSON.parse(TypedJSON.stringify(this.tmpJson) , GSM_vo);


        //first handle data for overall component

        //get the width for thumb nails
        this.thumbWidth = this.gsm_vo.thumbWidth;

        //create the label for the component
        let titleElement:string = "<div class='medium-title'>" +this.gsm_vo.componentTitle + "</div>";

        //append compoent id to div id to target current component if their are multiple GSMs
        let holderString:string = "<div class='portfolio-medium'><div id='GSM-" + this.gsm_vo.componentID +"' class='thumb-strip'>";
        
        //grab Job_vos out and build each thumb and corresponding popup modal data
        let sortedTmpJobVO:Array<Job_vo> = this.gsm_vo.job_vos.sort(function(obj1, obj2){return obj1.position - obj2.position;})
        let thumbsHtml:string = "";

        for(let tmpJobVO of sortedTmpJobVO)
        {
            console.log("titles: " + tmpJobVO.jobTitle);
            //let AdenThumb = require(tmpJobVO.thumbPath);
            let tPath:string = tmpJobVO.thumbPath;
            console.log("extracted thumb path: " + tPath);
            //const TmpThumb = import {tPath} from "./images";
            //(async () => { const TmpThumb = await import(tPath);}) ();
            const pathToCats = require
            
            
            let tmpElement:HTMLElement = document.createElement("a");
           
          
            let tmpThumbHTML:string = "<img src='" + tPath + "' width='" + this.thumbWidth +"'></img>";
            console.log("image html: " + tmpThumbHTML);
            //$('#tholder').on('click' , this.launchAden );
            let tmt:Array<Node> = $.parseHTML(tmpThumbHTML);
            //tmpElement.addEventListener("click", () => { this.launchAden("test")});
            $(tmt).appendTo(tmpElement);
            //$(tmt).click(this.launchAden);
            //tmpThumbHTML = $(tmt).prop('outerHTML');

            //thumbsHtml += tmpThumbHTML;
            thumbsHtml += $(tmpElement).prop('innerHTML');
           

            let htmlText:string="<video width='600' loop autoplay ><source src='./adendesktop.mp4' type='video/mp4'></video>";
            $('.modal-body').html(htmlText);
            
            
        }
        $('img').css('padding', '20px');
        let trythis:HTMLElement = document.createElement('div');
       // $('#thumb-strip').css('padding', '20px');
        let closeString:string = "</div></div></div>";
        
        let strip:string = titleElement + holderString + thumbsHtml + closeString;
        

       // let temp:string="hi";
       // adenThumb.addEventListener("click", function(){ launchAden(temp) });
        
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

    public launchAden(value:string):void
    {
        console.log("tmp is " + value);
        $("#myModal").modal();
    }
}
