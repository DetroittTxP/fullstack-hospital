export interface Member {
    username:string,
    password:string,
    email:string,
    tel:string,
}

export interface patient{
     name:string,
     age:string,
     gender:string,
     tel:string,
     address:string,
     id_card:string
}

export interface Logindata{
    username:string,
    password:string
}

export interface LoginProps{
    getLoginData:(loggedinData:string) => void
}

export interface MainPageProps{
    VerifiedUsername:String
}

export interface tokendata{
    status:string,
    token:string
}

