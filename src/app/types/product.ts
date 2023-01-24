export interface Product {
    id: number,
    name: string,
    imageURL: string,
    qty:number
    //categoryId:number
}
export interface CartProduct extends Product {
    qty:number;
}
