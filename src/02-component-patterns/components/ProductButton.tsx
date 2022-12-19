import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../../02-component-patterns/styles/styles.module.css';

interface ButtonProps {
    className?:string;
    style?:React.CSSProperties
}
   export const ProductButton = ({className,style}:ButtonProps) => {

    const { counter,increaseBy }= useContext(ProductContext);
     return(
 
         <div className={ `${styles.buttonsContainer} ${  className }` } style={ style } >
         <button className={ styles.buttonMinus } onClick={ () => increaseBy(-1) }>-</button>
         <div className={ styles.countLabel } >{ counter }</div>
         <button className={ styles.buttonAdd } onClick={ () => increaseBy(1) } >+</button>
     </div>
     ) 
    }

    export default ProductButton