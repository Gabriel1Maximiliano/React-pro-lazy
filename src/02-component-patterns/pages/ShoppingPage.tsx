import styles from '../../02-component-patterns/styles/styles.module.css';
import { ProductCard } from "../components/ProductCard"
import im from '../assets/coffee.png'
import {ProductTitle} from '../components/ProductTitle';
import {ProductButton} from '../components/ProductButton';
import {ProductImage} from '../components/ProductImage';
import  '../styles/custom-styles.css';


const product={
  id:'123asb',
  title:'Coffe Card1',
  img:im
}
export const ShoppingPage = () => {
  return (
    <div  >
        <h1>ShoppingPage</h1>
        <hr />
        <div className={styles.shoppingPageStyles}></div>
        <ProductCard product={product} className='bg-dark' >
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white'/>
           <ProductButton className='customs-bottons' />
        </ProductCard>
        <ProductCard product={product} >
          <ProductImage  />
          <ProductTitle style={{
            color:'blue'
          }}/>
           <ProductButton />
        </ProductCard>

        <ProductCard product={product} className='bg-dark' >
     
        <ProductCard.Image  className='custom-image'/>
          <ProductCard.Title  className='text-white' />
          <ProductCard.Button className='customs-bottons'   />
        </ProductCard>
    </div>
  )
}
