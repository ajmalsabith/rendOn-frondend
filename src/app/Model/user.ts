

export interface users{

    _id?:string,
    name?:string,
    email?:string,
    phone?:number,
    password?:string,
    purpose?:string,
    connections?:number,
    is_verified?:boolean,
    __v?:string,
    image?:string,
    is_admin:boolean

}


export interface vehilceldata{
    _id:string,
    ownerId:string,
    ownername:string,
    vehicles:[{
        _id:string,
        name:string,
        rentAmount:number,
        type:string,
        place:string,
        proof:string,
        image:string,
        status:boolean,
        views:number,
        like:number,
        date:Date,

    }],
    __v:string

}