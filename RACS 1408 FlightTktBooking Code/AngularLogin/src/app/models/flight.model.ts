import { StringifyOptions } from 'querystring';
import { Time } from '@angular/common';

export class Flight
{
    id: number;
    fullName: string;
    passengerCapacity:number;
    startTime:Time; 
    endTime:Time; 
    departureCity: string; 
    arrivalCity: string;
    photoPath: string;
}