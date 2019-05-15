
/**
 * This object holds the data needed to for the Gallery Strip Modal component to work.
 */


import 'reflect-metadata';
import {JsonObject, JsonMember, TypedJSON} from 'typedjson-npm';
import {Job_vo} from './Job_vo';

@JsonObject
export class GSM_vo
{
    private _componentTitle:string;
    private _componentID:number;
    private _thumbWidth:number;
    private _job_vos:Array<Job_vo>;
    private _job_vo:Job_vo;

    constructor(){
        console.log('gsm vo instantiated');
        this._componentTitle = "";
        this._componentID = NaN;
        this._thumbWidth = NaN;
        this._job_vos = [];
        this._job_vo = new Job_vo();
    }
    @JsonMember({ type:String})
    public get componentTitle():string{
        return this._componentTitle;
    }
   
    public set componentTitle(value:string){
        this._componentTitle = value;
    }

    @JsonMember({ type:Number})
    public get componentID():number{
        return this._componentID;
    }
   
    public set componentID(value:number){
        this._componentID= value;
    }

    @JsonMember({ type:Number})
    public get thumbWidth():number{
        return this._thumbWidth;
    }
   
    public set thumbWidth(value:number){
        this._thumbWidth= value;
    }

    @JsonMember({type:Array, elements:Job_vo})
    get job_vos():Array<Job_vo>{
        return this._job_vos;
    }
    set job_vos(value:Array<Job_vo>){
        this._job_vos = value;
    }

    @JsonMember({type:Job_vo})
    get job_vo():Job_vo{
        return this._job_vo;
    }
     set job_vo(value:Job_vo){
         this._job_vo = value;
     }
    
}

