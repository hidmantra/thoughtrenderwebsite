
/**
 * This object holds the data needed to for the Gallery Strip Modal component to work.
 */


import 'reflect-metadata';
import {JsonObject, JsonMember, TypedJSON} from 'typedjson-npm';
import {Job_vo} from './Job_vo';

@JsonObject
export class GSM_vo
{
    @JsonMember
    private _componentTitle:string;
    @JsonMember({type:Array, elementType:Job_vo})
    private _job_vos:Job_vo[];
    @JsonMember
    private _job_vo:Job_vo;

    constructor(){
        this._componentTitle = undefined;
        this._job_vos = undefined;
        this._job_vo = undefined;
    }

    get componentTitle():string{
        return this._componentTitle;
    }
   
    set componentTitle(value:string){
        this._componentTitle = value;
    }
    get job_vos():Array<Job_vo>{
        return this._job_vos;
    }
    set job_vos(value:Array<Job_vo>){
        this._job_vos = value;
    }
    get job_vo():Job_vo{
        return this._job_vo;
    }
     set job_vo(value:Job_vo){
         this._job_vo = value;
     }
    
}