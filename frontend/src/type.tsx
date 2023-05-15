export interface Member {
    username:string,
    password:string,
    email:string,
    tel:string,
}

export interface Patient{
     name:string,
     age:string,
     gender:string,
     address:string,
     tel:string
     id_card:string,
}

export interface QueuePatient{
    name:string,
    age:string,
    gender:string,
    date:any,
    address:string,
    id_card:string,
}

export interface Logindata{
    username:string,
    password:string
}

export interface MainPageProps{
    VerifiedUsername:String
}

export interface tokendata{
    status:string,
    token:string
}

