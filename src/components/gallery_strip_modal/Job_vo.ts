import { JsonObject, JsonMember } from "typedjson-npm";
import 'reflect-metadata';


export class Job_vo
{
    private _jobTitle:string;
    private _position:number;
    private _thumbPath:string;
    private _videoPath:string;
    private _id:number;
    private _description:string;
    //
    constructor(){
        console.log("Job_vo instantiated");
        this._jobTitle = undefined;
        this._position = undefined;
        this._thumbPath = undefined;
        this._videoPath = undefined;
        this._id = undefined;
        this._description = undefined;
    }

    @JsonMember({type:String})
    get jobTitle():string{
        return this._jobTitle;
    }

    set jobTitle(value:string){
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
        this.thumbPath = value;
    }

    @JsonMember({type:String})
    get videoPath():string{
        return this._videoPath
    }

    set videoPath(value:string){
        this._videoPath = value;
    }

    @JsonMember({type:Number})
    get id():number{
        return this._id;
    }

    set id(value:number){
        this._id = value;
    }

    @JsonMember({type:String})
    get description():string{
        return this._description;
    }

    set description(value:string){
        this._description = value;
    }
}