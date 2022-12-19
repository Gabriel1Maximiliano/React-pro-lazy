

import { createContext, ReactElement } from 'react';
import styles from '../../02-component-patterns/styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import { ProductButton } from './ProductButton';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';



export const ProductContext = createContext({} as ProductContextProps)

export const { Provider } = ProductContext;


export interface Props {
  product:Product;
  children?:ReactElement | ReactElement[];
  className?:string;
  style?:React.CSSProperties
}

   

 

export const ProductCard = ({children,product,className,style}:Props) => {
   const {counter,increaseBy} = useProduct();

  

  return (
    <Provider value={  {counter, increaseBy, product }  } >
    <div className={ `${styles.productCard} ${ className } ` } style ={ style }>
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

