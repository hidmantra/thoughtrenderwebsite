
import { JsonObject, JsonMember } from "./../../../node_modules/typedjson-npm/js/typed-json";
import 'reflect-metadata';
import { stringify } from "querystring";
import { IJob_vo } from './Job_vo';

export interface IJob_vo
{
    //readonly thumbPath?: string;
}


export class Job_vo implements IJob_vo
{

    private _thumbPath:string ;
    private _id:number;
    private _description:string ;
    private _filePath:string;
    private _jobTitle:string;
    private _position:number;

    constructor(){
        this.thumbPath = "hi";
        this._thumbPath = "ERROR: missing path to thumb image";
        this._id = NaN;
        this._description = "ERROR: missing description";
        this._filePath = "ERROR: missing path to video file" ;
        this._jobTitle = "ERROR: missing job title";
        this._position = NaN;
        console.log("Job_vo instantiated");

    }

    
    @JsonMember({type:String})
    public get jobTitle():string{
        return this._jobTitle;
    }

    public set jobTitle(value:string){
        this._jobTitle = value;
    }

    @JsonMember({ type:Number})
    public get position():number{
        return this._position;
    }
   
    public set position(value:number){
        this._position = value;
    }

    @JsonMember({type:String})
    get thumbPath():string{
        return this._thumbPath;
    }

    set thumbPath(value:string){
        this._thumbPath = value;
    }

    @JsonMember({type:String})
    public get filePath():string{
        return this._filePath
    }

    public set filePath(value:string){
        this._filePath = value;
    }

    @JsonMember({type:Number})
    public get id():number{
        return this._id;
    }

    public set id(value:number){
        this._id = value;
    }

    @JsonMember({type:String})
    public  get description():string{
        return this._description;
    }

    public set description(value:string){
        this._description = value;
    }
}