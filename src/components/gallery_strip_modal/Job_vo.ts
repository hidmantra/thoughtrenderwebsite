import { JsonObject, JsonMember } from "typedjson-npm";
import 'reflect-metadata';

export class Job_vo
{
    @JsonMember
    private _jobTitle:string;
    @JsonMember
    private _thumbPath:string;
    @JsonMember 
    private _videoPath:string;
    //
    constructor(){
        this._jobTitle = undefined;
        this._thumbPath = undefined;
        this._videoPath = undefined;
    }

    get jobTitle():string{
        return this._jobTitle;
    }

    set jobTitle(value:string){
        this._jobTitle = value;
    }

    get thumbPath():string{
        return this._thumbPath;
    }

    set thumbPath(value:string){
        this.thumbPath = value;
    }

    get videoPath():string{
        return this._videoPath
    }
}