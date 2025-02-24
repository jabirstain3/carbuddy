export type TArea = {
    address: string,
    city: string, 
}
export type TCar ={
    _id: string,
    name: string,
    image: string,
    doors: number,
    category: string,
    passengers: number,
    transmission: string,
    area: TArea,
    luggage: number,
    price: number,
    model: string,
    drive: string,
    engine: string,
    power: string,
    fuel: string,
    mileage: string,
    features: string[],
    addfeatures: string[],
    isDeleted?: boolean,
}

// user

export type TUser = {
    id: string, 
    userName: string,
    email: string,
    role: string,
    iat: number,
    exp: number,
}


// user info

export type TUserDetails = {
email: string,
number: string,
password: string,
role: string, 
status: string, 
username: string,
_id: string 
}