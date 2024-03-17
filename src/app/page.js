'use client'

import Custom_card from "@/components/app_components/custom_card";
import ImageSlider from "@/components/app_components/imageSlider";
import { setCartItems, setLogout } from "@/store/authSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function Home() {
  const images = [
    '/banner.jpg',
    '/banner1.jpg',
    
  ];
  const dispatch=useDispatch();
  const products=useSelector((state)=>state.auth.user_products);
  useEffect(()=>{
    const gettoken=async()=>{
      const token= await axios.get('http://localhost:3000/api/auth/gettoken');
      console.log(token.data.token)
      if(!token.data.token){
        dispatch(setLogout());
        dispatch(setCartItems([]));
      }
    }
    gettoken();
  },[])
  
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
