import { StringifyOptions } from 'querystring';

export class User
{
    id: number;
    fullName: string;
    gender: string;
    email?: string;
    phoneNumber?: number;
    dateOfBirth?: Date;
    isActive: boolean;
    photoPath: string;
    roleType: string;
    userName: string;
    passowrd: string;
}