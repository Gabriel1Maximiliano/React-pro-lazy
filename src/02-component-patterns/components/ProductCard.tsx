

import { createContext, ReactElement, useContext } from 'react';
import styles from '../../02-component-patterns/styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';
import { ProductButton } from './ProductButton';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';



export const ProductContext = createContext({} as ProductContextProps)

export const { Provider } = ProductContext;




   

 

export const ProductCard = ({children,product}:Props) => {
   const {counter,increaseBy} = useProduct();

  

  return (
    <Provider value={  {counter, increaseBy, product }  } >
    <div className={ styles.productCard } >
    { children }
      {/* <ProductImage img={product.img}/>
      <ProductTitle title={product.title} />
       <ProductButton  counter={ counter } increaseBy={ increaseBy }/> */}
    </div>
    </Provider>
  )
}
 ProductCard.Title  = ProductTitle;
 ProductCard.Image  = ProductImage;
 ProductCard.Button = ProductButton;

