import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../../02-component-patterns/styles/styles.module.css';

export const ProductTitle = ({title}:any) => {

    const { product } =useContext(ProductContext);
    return(
        <span className={ styles.productDescription } >{
            title ? title : product.title}
            </span>
    ) 
   }