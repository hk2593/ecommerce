'use client'

import Custom_card from "@/components/app_components/custom_card";
import ImageSlider from "@/components/app_components/imageSlider";
import { setCartItems, setLogout, setProducts } from "@/store/authSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function HomePage() {
  const images = [
    '/banner.jpg',
    '/banner1.jpg',
    
  ];
  
  const dispatch=useDispatch();
  
  const [Products,setproducts]=useState([]);
  
  useEffect(()=>{
    const gettoken=async()=>{
      const token= await axios.get(`${process.env.API_URL}/api/auth/gettoken`);
     const prod=await axios.get(`${process.env.API_URL}/api/products`);
      dispatch(setProducts(prod.data.data))
      
      setproducts(prod.data.data)
      console.log(token.data.token)
      if(!token.data.token){
        dispatch(setLogout());
        dispatch(setCartItems([]));
      }
    }
    gettoken();
  },[])
  const products=useSelector((state)=>state.auth.user_products)
  return (
    <> 
    <div className=" ">
    <div className="mx-auto overflow-hidden">
    <ImageSlider images={images}></ImageSlider>
    </div>
    <div className="flex flex-col ">
      <h1 className="font-bold text-3xl">Products</h1>
      <div className="flex flex-row justify-between">
      <div className=" w-16"></div>
      <div className="flex">
      <Custom_card products={products}></Custom_card>
      </div>
      <div className=" w-16"></div>
      </div>
    </div>
    </div>
    </>
  );
}