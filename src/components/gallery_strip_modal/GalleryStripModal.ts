import * as $ from "jquery";
import {JsonObject, JsonMember, TypedJSON} from 'typedjson-npm';
import { GSM_vo } from "./GSM_vo";
import { Job_vo } from "./Job_vo";
import { ThumbHolder } from "./ThumbHolder";
import {ScreenCoverEvent} from "./ScreenCoverEvent";
import { EventEmitter } from "events";

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
                "position" : 4,
                "thumbPath" : "gsm_assets/images/aden_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/adendesktop_456w.mp4"
            },
            {
                "jobTitle" : "Levaquin",
                "id"        : 2,
                "position" : 2,
                "thumbPath" : "gsm_assets/images/levaquin_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/levaquin_456w.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 1",
                "id"        : 3,
                "position" : 3,
                "thumbPath" : "gsm_assets/images/sawaya1_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/sawayasegalas1_456w.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 2",
                "id"        : 4,
                "position" : 1,
                "thumbPath" : "gsm_assets/images/sawaya2_large_thumb400.jpg",
                "videoPath" : "./gsm_assets/video/sawayasegalas2_456w.mp4"
            },
            {
                "jobTitle" : "GoFur Help",
                "id"        : 5,
                "position" : 5,
                "thumbPath" : "gsm_assets/images/gofur_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/gofur_456w.mp4"
            },
            {
                "jobTitle" : "Pantene 1",
                "id"        : 6,
                "position" : 6,
                "thumbPath" : "gsm_assets/images/pantene1_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/pantene1_456w.mp4"
            },
            {
                "jobTitle" : "Evian 1",
                "id"        : 7,
                "position" : 7,
                "thumbPath" : "gsm_assets/images/evian1_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/evian1_456w.mp4"
            },
            {
                "jobTitle" : "MOMA",
                "id"        : 8,
                "position" : 8,
                "thumbPath" : "gsm_assets/images/moma_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/moma_456w.mp4"
            },
            {
                "jobTitle" : "Evian 2",
                "id"        : 9,
                "position" : 9,
                "thumbPath" : "gsm_assets/images/evian2_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/evian2_456w.mp4"
            },
            {
                "jobTitle" : "KOHLS",
                "id"        : 10,
                "position" : 10,
                "thumbPath" : "gsm_assets/images/kohls_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/kohls_456w.mp4"
            },
            {
                "jobTitle" : "Nortel 1",
                "id"        : 11,
                "position" : 11,
                "thumbPath" : "gsm_assets/images/nortel1_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/nortel1_456w.mp4"
            },
            {
                "jobTitle" : "Pantene 2",
                "id"        : 12,
                "position" : 12,
                "thumbPath" : "gsm_assets/images/pantene2_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/pantene2_456w.mp4"
            },
            {
                "jobTitle" : "Nortel 2",
                "id"        : 13,
                "position" : 13,
                "thumbPath" : "gsm_assets/images/nortel2_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/nortel2_456w.mp4"
            },
            {
                "jobTitle" : "Trump Place 1",
                "id"        : 14,
                "position" : 14,
                "thumbPath" : "gsm_assets/images/trump1_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/trump1_456w.mp4"
            },
            {
                "jobTitle" : "Trump Place 2",
                "id"        : 15,
                "position" : 15,
                "thumbPath" : "gsm_assets/images/trump2_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/trump2_456w.mp4"
            },
            {
                "jobTitle" : "Synnex",
                "id"        : 16,
                "position" : 16,
                "thumbPath" : "gsm_assets/images/synnex_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/synnex_456w.mp4"
            },
            {
                "jobTitle" : "Plavix",
                "id"        : 17,
                "position" : 17,
                "thumbPath" : "gsm_assets/images/plavix_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/plavix_456w.mp4"
            },
            {
                "jobTitle" : "Sawaya Segalis 3",
                "id"        : 18,
                "position" : 18,
                "thumbPath" : "gsm_assets/images/sawaya3_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/sawayasegalas3_456w.mp4"
            },
            {
                "jobTitle" : "HPV 1",
                "id"        : 19,
                "position" : 19,
                "thumbPath" : "gsm_assets/images/hpv1_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/hpv1_456w.mp4"
            },
            {
                "jobTitle" : "HPV 2",
                "id"        : 20,
                "position" : 20,
                "thumbPath" : "gsm_assets/images/hpv2_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/hpv2_456w.mp4"
            },
            {
                "jobTitle" : "Carestream",
                "id"        : 21,
                "position" : 21,
                "thumbPath" : "gsm_assets/images/carestream_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/carestream_456w.mp4"
            },
            {
                "jobTitle" : "GTS",
                "id"        : 22,
                "position" : 22,
                "thumbPath" : "gsm_assets/images/gts_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/gts_456w.mp4"
            },
            {
                "jobTitle" : "DLJ",
                "id"        : 23,
                "position" : 23,
                "thumbPath" : "gsm_assets/images/dlj_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/dlj_456w.mp4"
            },
            {
                "jobTitle" : "EISAI",
                "id"        : 24,
                "position" : 24,
                "thumbPath" : "gsm_assets/images/eisai_large_thumb400.jpg",
                "videoPath" : "gsm_assets/video/eisai_456w.mp4"
            }
            
        ]
    }

    //
    private _gsm_vo:GSM_vo = new GSM_vo();
    private _thumbWidth:number;
    private _targetComponent:HTMLElement;
    public _tester:EventEmitter;
    //private _coverUp:HTMLElement = document.createElement("div");
    public _coverUp:HTMLElement //= new HTMLElement();
    public isScreenCovered:boolean = false;
    /**
     * An array of Job_vos sorted in order of each position property
     */
    private _sortedTmpJobVO:Array<Job_vo> = new Array<Job_vo>();
    private readonly onCoverUp = new LiteEvent<void>();
    private readonly onCoverDown = new LiteEvent<void>();
    

    constructor()
    {
        console.log('GSM class built');
        this._coverUp = document.createElement("div");
        this._tester = new EventEmitter();
        console.log("1 isScreenCovered: " + this.isScreenCovered);

        this.isScreenCovered = false;

        console.log("2 isScreenCovered: " + this.isScreenCovered);

        //this._coverUp = new HTMLElement();
    }

    public get CoverUp(){return this.onCoverUp.expose();}

    public get CoverDown(){return this.onCoverDown.expose();}

    /**
     * Takes a component and adds the GSM to it.
     * 
     * @param targetComponent The component to which the GSM will attached to
     */
    public appendComponent( targetComponent:HTMLElement ):void
    {
         this._targetComponent = targetComponent;
         console.log("targetcompon: "+ this._targetComponent);
        //convert json object into a GSM_vo
        this._gsm_vo = TypedJSON.parse(TypedJSON.stringify(this.tmpJson) , GSM_vo);
        //first handle data for overall component

        //get the width for thumb nails
        this._thumbWidth = this._gsm_vo.thumbWidth;

        //create the label for the component
        let titleElement:HTMLElement = document.createElement("div");
        titleElement.className = "medium-title";
        titleElement.innerHTML = this._gsm_vo.componentTitle
        $(titleElement).insertAfter(this._targetComponent);

        this._targetComponent.appendChild(titleElement);
        let holderElement:HTMLElement = document.createElement("div");
        
        holderElement.className="portfolio-medium";
        //append compoent id to div id to target current component if their are multiple GSMs
        holderElement.innerHTML = "<div id='GSM-" + this._gsm_vo.componentID +"' class='thumb-strip'>";
        this._targetComponent.appendChild(holderElement);
        //add listener to holder to catch clicks on image
        holderElement.addEventListener("modalLauncher", this.launchModal);
        
       
        //sort the jobs in order of position
        this._sortedTmpJobVO = this._gsm_vo.job_vos.sort(function(obj1, obj2){return obj1.position - obj2.position;})
        let thumbsHtml:string = "";
        
        //add images to stage
        for(let tmpJobVO of this._sortedTmpJobVO)
        {
            let tPath:string = tmpJobVO.thumbPath;
            let myThumb = new Image();
            myThumb.width = this._thumbWidth;
            myThumb.src = tPath;
            myThumb.className = 'myImage';
            let dataHolder:object = {vo:tmpJobVO,context:this};
            

            myThumb.addEventListener('click', function(){
                this.dispatchEvent(new CustomEvent("modalLauncher", {
                    bubbles:true,
                    //detail:{vo: tmpJobVO}
                    detail:{dt: dataHolder}

                }));
            });
                
            holderElement.appendChild(myThumb); 
             
        }


        $('img').css('padding', '20px');
    }


    /**
     * This is a utility function for turning html elements (and children)
     * into a string
     * 
     * @param who the HTMLElement to parse
     * @param deep how deep to traverse element
     */
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
   
   
    /**
     * Called when an image is clicked on
     * it launches a modal window
     * 
     * @param e CustomEvent
     */
    public launchModal(e:CustomEvent):void
    {
        //let tmpscreen:boolean;
        /*
        var tmpscreen = ():boolean => {
            return this.isScreenCovered;
        }
        */
        let classRef:any = e.detail.dt.context;
        console.log("3 isScreenCovered: " + classRef.isScreenCovered);
       
        //console.log("3 isScreenCovered: " + tmpscreen());
        if(classRef.isScreenCovered == false){
            console.log("wasn't covered");
            this.isScreenCovered = true;
            classRef.onCoverUp.trigger();
        }
        //() => {console.log("try");this.onCoverUp.trigger();};
        //let tmpJobVo:Job_vo = e.detail.vo as Job_vo;
        let tmpJobVo:Job_vo = e.detail.dt.vo as Job_vo;

        let title:HTMLElement = document.getElementById('modal-title');
        title.innerHTML = tmpJobVo.jobTitle;
        
       //let tmph = document.createElement("button");
       
       //$('.medium-holder').append(tmph);
       let tw:number = 10;
       this._coverUp = document.createElement("div");
       this._coverUp.className = "cover-up"
       this._coverUp.style.position = "fixed";
       this._coverUp.style.left = "0";
       this._coverUp.style.top="0";
       this._coverUp.style.padding="0";
       this._coverUp.style.margin="0";
       this._coverUp.style.width = "100%";
       this._coverUp.style.height = "100%"
       this._coverUp.style.backgroundColor = 'black';
       this._coverUp.style.opacity = ".8";
       this._coverUp.style.overflow = "hidden";
       //this._coverUp.dispatchEvent(new Event("coverOn"));
       //this._coverUp.dispatchEvent(new ScreenCoverEvent("coverOn"));
       //ScreenCoverEvent.
       
       $('.medium-holder').append(this._coverUp);
      
      

       let projectTitle = document.createElement("div");
       projectTitle.style.color = "white";
       projectTitle.style.paddingTop = "50px"
       projectTitle.style.paddingLeft = "40px";
       projectTitle.innerHTML = "<p>" + tmpJobVo.jobTitle + "</p>";
       this._coverUp.appendChild(projectTitle);

       let videoPlayer = document.createElement("div");
       videoPlayer.className = "video-player";
       videoPlayer.style.position = "fixed";
       videoPlayer.style.top ="0";
       videoPlayer.style.left="0";
       videoPlayer.style.paddingLeft = "40px";
       videoPlayer.style.paddingTop = "100px";
       let htmlText:string="<video width='600' loop autoplay ><source src='" + tmpJobVo.videoPath + "' type='video/mp4'></video>";
        videoPlayer.innerHTML = htmlText;
        $('.medium-holder').append(videoPlayer);
        //const tester:EventEmitter = new EventEmitter();
        let that = this;
        //this._tester = new EventEmitter();
        $( ".cover-up" ).click(function() {
            
            let foo:string = "foomit";
            //that._tester.emit('foo', foo);
            console.log( "Handler for .click() called." );
            classRef.onCoverDown.trigger();
            $(".cover-up").remove();
            $(".video-player").remove();
            this.dispatchEvent(new CustomEvent("clicked", {
                bubbles:true
            }));
          });
          //that._tester.on('foo', (foo)=>console.log(foo));
    }
}
interface ILiteEvent<T> {
    on(handler: { (data?: T): void }) : void;
    off(handler: { (data?: T): void }) : void;
}

class LiteEvent<T> implements ILiteEvent<T> {
    private handlers: { (data?: T): void; }[] = [];

    public on(handler: { (data?: T): void }) : void {
        this.handlers.push(handler);
    }

    public off(handler: { (data?: T): void }) : void {
        this.handlers = this.handlers.filter(h => h !== handler);
    }

    public trigger(data?: T) {
        console.log("triggered");
        this.handlers.slice(0).forEach(h => h(data));
    }

    public expose() : ILiteEvent<T> {
        return this;
    }
}