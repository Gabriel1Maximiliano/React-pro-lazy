import styles from '../../02-component-patterns/styles/styles.module.css';
import { ProductCard } from "../components/ProductCard"
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductButton';
import { ProductImage } from '../components/ProductImage';
import '../styles/custom-styles.css';
import { products } from '../data/products';
//import { useShoppingCart } from '../hooks/useShoppingCart';


const product = products[0];

export const ShoppingPage = () => {



  return (
    <div  >
      <h1>ShoppingPage</h1>
      <hr />
      <div className={styles.shoppingPageStyles}></div>
    
      <div className='shopping-cart' >
      <ProductCard product={product}
              className='bg-dark' style={{ width: '100px' }} 
              key={product.id}
              initialValues={{count:4,maxCount:10}}
             >
        {
          ({count,
            isMaxCountReached,
            product,
            increaseBy,
            reset}) => (
                 <>
            
              <ProductImage className='custom-image' />
               <ProductTitle />
              <ProductButton className='customs-bottons' />
            </>
          )
        }
        </ProductCard>
      </div>
    </div>
  )
}
