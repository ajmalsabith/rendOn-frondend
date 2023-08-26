

export interface users {

    _id?: string,
    name?: string,
    email?: string,
    phone?: number,
    password?: string,
    purpose?: string,
    connections?: number,
    is_verified?: boolean,
    __v?: string,
    image?: string,
    is_admin: boolean,
    post:number,
    is_block:false,
    rating:number,
    qualification:string,
    place:string,
    aboutyou:string

}


export interface vehicleModel {
    iconHighlighted: boolean
    _id: string,
    ownerId: string,
    ownername: string,
    name: string,
    rentAmount: number,
    type: string,
    place: string,
    proof: string,
    image: string,
    status: boolean,
    views: number,
    like: number,
    date: Date,
    is_block:false,
    __v: string

}