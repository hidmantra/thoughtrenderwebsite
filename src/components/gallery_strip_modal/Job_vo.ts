import { JsonObject, JsonMember } from "typedjson-npm";
import 'reflect-metadata';


export class Job_vo
{
    private _jobTitle:string;
    private _position:Number;
    private _thumbPath:string;
    private _videoPath:string;
    //
    constructor(){
        console.log("Job_vo instantiated");
        this._jobTitle = undefined;
        this._position = undefined;
        this._thumbPath = undefined;
        this._videoPath = undefined;
    }

    @JsonMember({type:String})
    get jobTitle():string{
        return this._jobTitle;
    }

    set jobTitle(value:string){
        this._jobTitle = value;
    }

    @JsonMember({ type:Number})
    public get position():Number{
        return this._position;
    }
   
    public set position(value:Number){
        this._position = value;
    }

    @JsonMember({type:String})
    get thumbPath():string{
        return this._thumbPath;
    }

    set thumbPath(value:string){
        this.thumbPath = value;
    }

    @JsonMember({type:String})
    get videoPath():string{
        return this._videoPath
    }

    set videoPath(value:string){
        this._videoPath = value;
    }
}