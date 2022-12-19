import styles from '../../02-component-patterns/styles/styles.module.css';
import { ProductCard } from "../components/ProductCard"
import im from '../assets/coffee.png'
//import im from '/coffee-mug.png';

const product={
  id:'123asb',
  title:'Coffe Card1',
  img:im
}
export const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div className={styles.shoppingPageStyles}></div>
        <ProductCard product={product}>

        <ProductCard.Image  />
          <ProductCard.Title  />
          <ProductCard.Button  />
        </ProductCard>
    </div>
  )
}
