import React, { useContext } from 'react'
import { AppContext } from '../App'

const URLPage = () => {
    const{urlList,setUrlList}=useContext(AppContext);
    async function getUrlList(){
        try {
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
    }
  return (
    <div>URLPage</div>
  )
}

export default URLPage