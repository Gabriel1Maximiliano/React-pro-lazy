

import { createContext} from 'react';

import styles from '../../02-component-patterns/styles/styles.module.css';
import noImage from '../assets/no-image.jpg'
import { useProduct } from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import { ProductButton } from './ProductButton';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';



export const ProductContext = createContext({} as ProductContextProps)

export const { Provider } = ProductContext;


export interface Props {
  product:Product;
  // children?:ReactElement | ReactElement[] ;
  children: (args:ProductCardHandlers) => JSX.Element
  className?:string;
  style?:React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?:number;
  initialValues?: InitialValues;
}


   

 

export const ProductCard = ({children,product,className,style,onChange,value,initialValues}:Props) => {
   const {counter,increaseBy,maxCount,isMaxReached,reset} = useProduct( { onChange,product,value,initialValues } );

  

  return (
    <Provider value={  {counter, increaseBy, product ,maxCount}  } >
    <div className={ `${styles.productCard} ${ className } ` } style ={ style }>
    { children({
      count: counter,
      isMaxCountReached: isMaxReached,
      product,
      increaseBy: increaseBy,
      reset
    }) }
     
    </div>
    </Provider>
  )
}
 ProductCard.Title  = ProductTitle;
 ProductCard.Image  = ProductImage;
 ProductCard.Button = ProductButton;

