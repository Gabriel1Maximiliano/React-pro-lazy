import { ReactElement } from "react";

export interface Props {
    product:Product;
    children?:ReactElement | ReactElement[]
}
export interface Product {
    id:string;
    title:string;
    img:string;
}
export interface ButtonProductsProps {
    counter:number;
    increaseBy: (value:number) => any
}
export interface ProductContextProps {
    counter:number;
    increaseBy: (value:number) => void;
    product:Product; 
}