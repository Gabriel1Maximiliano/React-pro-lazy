import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppinCart, setShoppinCart] = useState<{[ key:string ]: ProductInCart}>({});
    const [cart, setcart] = useState<{[ key:string ]: ProductInCart}[]>([]);
    const onProductCountChange = ({count,product}:{count: number,product:Product}) => {
  
      setShoppinCart(oldShoppingCart =>{
  
     
        if(count === 0){
        const {[product.id]: toDelete,...rest} = oldShoppingCart;
        console.log(toDelete)
        return rest
        }
       
     
         return{
          ...oldShoppingCart,
         [ product.id ]: {...product,count}
         }
      })
    }
  
    return{
        //functions
        onProductCountChange,
        // states
        shoppinCart
  } 
   
  
}
