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
                "id"        : 1,
                "position" : 1,
                "thumbPath" : "gsm_assets/images/aden_large_thumb400.jpg",
                "videoPath" : "./adendesktop.mp4"
            },
            {
                "jobTitle" : "Levaquin",
                "id"        : 2,
                "position" : 2,
                "thumbPath" : "gsm_assets/images/levaquin_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 1",
                "id"        : 3,
                "position" : 3,
                "thumbPath" : "gsm_assets/images/sawaya1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 2",
                "id"        : 4,
                "position" : 4,
                "thumbPath" : "gsm_assets/images/sawaya2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "GoFur Help",
                "id"        : 5,
                "position" : 5,
                "thumbPath" : "gsm_assets/images/gofur_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Pantene 1",
                "id"        : 6,
                "position" : 6,
                "thumbPath" : "gsm_assets/images/pantene1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Evian 1",
                "id"        : 7,
                "position" : 7,
                "thumbPath" : "gsm_assets/images/evian1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "MOMA",
                "id"        : 8,
                "position" : 8,
                "thumbPath" : "gsm_assets/images/moma_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Evian 2",
                "id"        : 9,
                "position" : 9,
                "thumbPath" : "gsm_assets/images/evian2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "KOHLS",
                "id"        : 10,
                "position" : 10,
                "thumbPath" : "gsm_assets/images/kohls_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Nortel 1",
                "id"        : 11,
                "position" : 11,
                "thumbPath" : "gsm_assets/images/nortel1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Pantene 2",
                "id"        : 12,
                "position" : 12,
                "thumbPath" : "gsm_assets/images/pantene2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Nortel 2",
                "id"        : 13,
                "position" : 13,
                "thumbPath" : "gsm_assets/images/nortel2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Trump Place 1",
                "id"        : 14,
                "position" : 14,
                "thumbPath" : "gsm_assets/images/trump1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Trump Place 2",
                "id"        : 15,
                "position" : 15,
                "thumbPath" : "gsm_assets/images/trump2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Synnex",
                "id"        : 16,
                "position" : 16,
                "thumbPath" : "gsm_assets/images/synnex_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Plavix",
                "id"        : 17,
                "position" : 17,
                "thumbPath" : "gsm_assets/images/plavix_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 3",
                "id"        : 18,
                "position" : 18,
                "thumbPath" : "gsm_assets/images/sawaya3_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "HPV 1",
                "id"        : 19,
                "position" : 19,
                "thumbPath" : "gsm_assets/images/hpv1_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "HPV 2",
                "id"        : 20,
                "position" : 20,
                "thumbPath" : "gsm_assets/images/hpv2_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "Carestream",
                "id"        : 21,
                "position" : 21,
                "thumbPath" : "gsm_assets/images/carestream_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "GTS",
                "id"        : 22,
                "position" : 22,
                "thumbPath" : "gsm_assets/images/gts_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "DLJ",
                "id"        : 23,
                "position" : 23,
                "thumbPath" : "gsm_assets/images/dlj_large_thumb400.jpg",
                "videoPath" : "./adendesktop2.mp4"
            },
            {
                "jobTitle" : "EISAI",
                "id"        : 24,
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

    public appendComponent( targetComponent:HTMLElement ):void
    {
        let _targetComponent:HTMLElement = targetComponent;
        
        //convert json object into a GSM_vo
        this.gsm_vo = TypedJSON.parse(TypedJSON.stringify(this.tmpJson) , GSM_vo);

        
        //first handle data for overall component

        //get the width for thumb nails
        this.thumbWidth = this.gsm_vo.thumbWidth;

        //create the label for the component

        let titleElement:HTMLElement = document.createElement("div");
        titleElement.className = "medium-title";
        titleElement.innerHTML = this.gsm_vo.componentTitle
        //"<div class='medium-title'>" +this.gsm_vo.componentTitle + "</div>";
        
        //$(_targetComponent).insertAfter(titleElement);
       // _targetComponent.innerHTML = titleElement;
        $(titleElement).insertAfter(_targetComponent);

        _targetComponent.appendChild(titleElement);
        // $(_targetComponent).insertAfter(titleElement);

         //_targetComponent.appendChild(titleElement);

        //append compoent id to div id to target current component if their are multiple GSMs
        let holderElement:HTMLElement = document.createElement("div");
        
        console.log("holderString: " +this.getHtml(holderElement,2));
        holderElement.className="portfolio-medium";
        holderElement.innerHTML = "<div id='GSM-" + this.gsm_vo.componentID +"' class='thumb-strip'>";
        console.log("holderString (after): " +this.getHtml(holderElement,2));
       
        _targetComponent.appendChild(holderElement);
        //$(".holder").append(titleElement);
       holderElement.addEventListener("hello", this.launchAden)
       
        //grab Job_vos out and build each thumb and corresponding popup modal data
        let sortedTmpJobVO:Array<Job_vo> = this.gsm_vo.job_vos.sort(function(obj1, obj2){return obj1.position - obj2.position;})
        let thumbsHtml:string = "";

        
        
        for(let tmpJobVO of sortedTmpJobVO)
        {
           
            let event = new Event("hello", {bubbles: true}); // (2)
            let elem:HTMLElement = document.createElement("a");
            $(elem).appendTo('')
            elem.dispatchEvent(event);
            //let AdenThumb = require(tmpJobVO.thumbPath);
            let tPath:string = tmpJobVO.thumbPath;
           
            

            let myThumb = new Image();
            myThumb.width = this.thumbWidth;
            myThumb.src = tPath;
            myThumb.className = 'myImage';
            //let imgTag = document.getElementById('myImage');
           // console.log("myThumb? > " + myThumb);
           /* myThumb.addEventListener('click', function(){
                console.log("youoyo");
            });
*/
            myThumb.addEventListener('click', function(){
                console.log("youoyo");
                //let event = new CustomEvent("hello", {bubbles: true}); // (2)
                this.dispatchEvent(new CustomEvent("hello", {
                    bubbles:true,
                    detail:{id: tmpJobVO.id}
                }));
            })
            //myThumb.addEventListener("click", this.launchAden);
            //myThumb.addEventListener("click", this.launchAden);
            holderElement.appendChild(myThumb);
            
            let tmpElement:HTMLElement = document.createElement("a");
            
            
            let tmpThumbHTML:string = "<img src='" + tPath + "' width='" + this.thumbWidth +"'></img>";
           
            tmpElement.innerHTML = tmpThumbHTML;
            console.log("image html: " + tmpThumbHTML);
            //$('#tholder').on('click' , this.launchAden );

            //$(myThumb).appendTo( tmpElement );
            $(".thumb-strip").appendTo(tmpElement);
            

            //let tmt:Array<Node> = $.parseHTML(tmpThumbHTML);
            //$(tmt).appendTo(tmpElement);
            
            thumbsHtml += $(tmpElement).prop('innerHTML');
           

            let htmlText:string="<video width='600' loop autoplay ><source src='./adendesktop.mp4' type='video/mp4'></video>";
            $('.modal-body').html(htmlText);
            
            
        }

        let tmpp:HTMLElement = document.createElement('div');
        

        $('img').css('padding', '20px');
        let trythis:HTMLElement = document.createElement('div');
       // $('#thumb-strip').css('padding', '20px');
        let closeString:string = "</div></div></div>";
        

        //tmpp.innerHTML = holderString + thumbsHtml + closeString;
       
       // $(tmpp).insertAfter(titleElement);
        //let strip:string = titleElement + holderElement + thumbsHtml + closeString;
        

       // let temp:string="hi";
       // adenThumb.addEventListener("click", function(){ launchAden(temp) });
        
        //return strip;
    }
    private getHtml(who:HTMLElement, deep:number){
        if(!who || !who.tagName) return '';
        var txt, ax, el= document.createElement("div");
        el.appendChild(who.cloneNode(false));
        txt= el.innerHTML;
        if(deep){
            ax= txt.indexOf('>')+1;
            txt= txt.substring(0, ax)+who.innerHTML+ txt.substring(ax);
        }
        el= null;
        return txt;
    }
    private getModalHTML(   modalID:string, 
                            modalHeading:string,
                        ):string
    {
        //let modalID:string = 
        let tmpStringHtml1:string;
        let modalHTML:string ="<div class='modal fade' id='myModal'><div class='modal-dialog modal-lg'><div class='modal-content'><div class='modal-header'><h4 class='modal-title'>Modal Heading</h4><button type='button' class='close' data-dismiss='modal'>&times;</button></div><div id='#test' class='modal-body'></div><div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button></div></div></div>";

        return modalHTML;
    }

    public launchAden(e:CustomEvent):void
    {
        console.log("tmp is " + e.detail.id );
        $("#myModal").modal();
    }
}
