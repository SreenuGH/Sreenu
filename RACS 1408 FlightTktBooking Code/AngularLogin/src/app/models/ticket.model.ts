import { StringifyOptions } from 'querystring';

export class Ticket
{
    id: number;
    fullName: string;
    passportId: string;
    airlinesName: string;
    departureCity: string; 
    arrivalCity: string;
    price: number;
    gender: string;
    email?: string;
    phoneNumber?: number;
    dateOfBirth?: Date;
    photoPath: string;
}