import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/interfaces";


export const useShoppingCart = () => {

    const [shoppinCart, setShoppinCart] = useState<{[ key:string ]: ProductInCart}>({});
    const [cart, setcart] = useState<{[ key:string ]: ProductInCart}[]>([]);
    const onProductCountChange = ({count,product}:{count: number,product:Product}) => {
  
      setShoppinCart(oldShoppingCart =>{
  
        const productInCart: ProductInCart = oldShoppingCart[product.id] || {...product, count:0};
        if( Math.max( productInCart.count +count,0 ) > 0 ){
          productInCart.count+=count;
          return{
            ...oldShoppingCart,
            [product.id]:productInCart
          }
        }
        // borrar el producto
        const {[product.id]: toDelete,...rest} = oldShoppingCart;
        return {...rest};
      //  if(count === 0){
      //  const {[product.id]: toDelete,...rest} = oldShoppingCart;
      //  console.log(toDelete)
      //  return rest
      //  }
       
      //  setcart([...cart ,shoppinCart ])
      //   return{
      //     ...oldShoppingCart,
      //   [ product.id ]: {...product,count}
      //   }
      })
    }
  
    return{
        //functions
        onProductCountChange,
        // states
        shoppinCart
  } 
   
  
}
