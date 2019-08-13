import {Flight} from "../models/flight.model"
export class ResolvedflightList{
    constructor(public flightList:Flight[], public error:any=null){}
}