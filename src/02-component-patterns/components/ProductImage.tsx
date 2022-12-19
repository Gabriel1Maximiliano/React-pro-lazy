import { useContext } from "react";
import styles from '../../02-component-patterns/styles/styles.module.css';
import noImage from '../assets/no-image.jpg'; 
import { ProductContext } from './ProductCard';


export const ProductImage = ({img}:any) => {

    const { product } =useContext(ProductContext);
    let imgToShow : string;
    if( img ){
         imgToShow =img;
    }else if(product.img){
         imgToShow = product.img;
    }else{
         imgToShow = noImage;
    }
    return(
        <img className={ styles.productImg } src={imgToShow} alt="img" />
    ) 
   }