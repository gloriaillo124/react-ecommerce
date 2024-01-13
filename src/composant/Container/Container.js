import './Container.css'
import Product from '../Product/Product'

var Container = ({products}) =>{
   // var products = props.products
   //var {products} = props
    return  <div className="container">
               <div className='products flex wrap gap-30 jc p-20'>
               {
                    products.map((product, index)=><Product product={product} key={index}/>)
               }
                
               </div>
             </div>
}

export default Container