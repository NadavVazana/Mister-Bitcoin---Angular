import { Move } from './move';
export interface User {
    _id?:string
    username:string
    balance:number
    moves:Move[]
}
