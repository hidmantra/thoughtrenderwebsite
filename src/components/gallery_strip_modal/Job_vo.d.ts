
import { JsonObject, JsonMember } from "./../../../node_modules/typedjson-npm/js/typed-json";
import 'reflect-metadata';
import { stringify } from "querystring";

export interface IJob_vo
{
    readonly jobTitle : string;
    readonly position : number;
    readonly thumbPath : string;
    readonly filePath : string;
    readonly id : number;
    readonly description : string;
}