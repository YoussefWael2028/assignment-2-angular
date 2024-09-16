export interface Product {
    title:string,
    imageCover:string
    ratingAverage:number,
    id:string,
    price:number,
    category:Categories,
    description?:string,
    images?:string[]
}  
  interface Categories {
   image?:string
    _id?: string;
    name: string;
  }
  