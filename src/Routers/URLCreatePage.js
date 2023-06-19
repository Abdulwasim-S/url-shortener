import React, { useContext } from 'react'
import HeadPage from './HeadPage'
import URLPage from './URLPage'
import { AppContext } from '../App'
import { Outlet } from 'react-router-dom'

const URLCreatePage = () => {
    const{urlList,setUrlList}=useContext(AppContext);
    async function getUrlList(){
        try {
            console.log("it is working")
            const response=await fetch("https://short-url-backend.vercel.app/shorturl");
            const data=await response.json();
            if(data.shorturls){
                setUrlList(...data.shorturls);
            }
            else{
                setUrlList([]);
            }
        } catch (error) {
            console.log(error)
        }
        getUrlList();
    }
  return (
    <>
    <HeadPage/>
    <div className='m-5'>
        <form>
            <input className='form-control mb-3' type='text' placeholder='enter url'/>
            <input className='form-control mb-3' type='text' placeholder='Name for url'/>
            <input className='btn btn-success' type='submit' value={"Generate Short URL"}/>
        </form>
        
    </div>
    <Outlet/>
    </>
  )
}

export default URLCreatePage