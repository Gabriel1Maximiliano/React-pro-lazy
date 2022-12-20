import styles from '../../02-component-patterns/styles/styles.module.css';
import { ProductCard } from "../components/ProductCard"
import { ProductTitle } from '../components/ProductTitle';
import { ProductButton } from '../components/ProductButton';
import { ProductImage } from '../components/ProductImage';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';




export const ShoppingPage = () => {


  const { onProductCountChange, shoppinCart } = useShoppingCart();
  return (
    <div  >
      <h1>ShoppingPage</h1>
      <hr />
      <div className={styles.shoppingPageStyles}></div>
      {

        products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            className='bg-dark'
            onChange={(ev) => onProductCountChange(ev)}
            value={shoppinCart[product.id]?.count || 0}
          >
            <ProductImage className='custom-image' />
            <ProductTitle className='text-white' />
            <ProductButton className='customs-bottons' />
          </ProductCard>

        ))

      }
      <div className='shopping-cart' >

        {
          Object.entries(shoppinCart).map(([key, product]) => (

            <ProductCard product={product}
              className='bg-dark' style={{ width: '100px' }}
              key={key}
              value={product.count}
              onChange={(ev) => onProductCountChange(ev)} >
              <ProductImage className='custom-image' />

              <ProductButton className='customs-bottons' />
            </ProductCard>
          ))
        }

      </div>

      <code>
        {
          JSON.stringify(shoppinCart, null, 5)
        }</code>
    </div>
  )
}
