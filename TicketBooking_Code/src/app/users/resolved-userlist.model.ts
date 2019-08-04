import {User} from "../models/user.model"
export class ResolvedUserList{
    constructor(public userList:User[], public error:any=null){}
}