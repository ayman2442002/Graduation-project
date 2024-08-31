import React from 'react'
import style from "./Products.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useProducts from '../../Hooks/useProducts'


export default function Products() {
  let {data,error,isError,isLoading}=useProducts()

    
      if(isError){
        return <h3>{error}</h3>
      }
    
      if(isLoading){
        return <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       
      }
    
    //   const [products, setproducts] = useState([])
    // function getProducts(){
    //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    //   .then((res)=>{
    //     setproducts(res.data.data)
        
    //   })
    //   .catch((res)=>{
    //     console.log(res);
        
    //   })
    // }
    
    // useEffect(()=>{
    //   getProducts()
    // },[])
    
      return <>
    
    <div className="row">
    { data?.data?.data.map((product)=> (<div key={product.id} className='w-full md:w-1/3 lg:w-1/4 xl:w-1/6'>
    
    
    <div className='product p-2 my-2'>
    <Link to={`productdetails/${product.id}/${product.category.name} `}>
    
    <img src={product.imageCover} className='w-full' alt="" />
      <h3 className=' text-emerald-600'>{product.category.name}</h3>
      <h3 className=' mb-1 font-semibold'> {product.title.split(" ").slice(0,2).join(" ")} </h3>
      <div className='flex justify-between p-3'>
        <span>{product.price} EGB</span>
        <span> <i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</span>
      </div>
    </Link>
    <button className='btn'>Add To Cart</button>
    
    
    </div>
    
    
    </div>))}
    
    </div>
    
      
      </>
}
