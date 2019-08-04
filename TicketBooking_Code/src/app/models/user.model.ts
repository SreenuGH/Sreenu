import { StringifyOptions } from 'querystring';

export class User
{
    id: number;
    fullName: string;
    gender: string;
    contactPreference: string;
    email?: string;
    phoneNumber?: number;
    dateOfBirth?: Date;
    department: string;
    isActive: boolean;
    photoPath: string;
}