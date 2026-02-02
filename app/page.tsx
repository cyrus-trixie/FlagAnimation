"use client"
import { useState , useEffect} from "react";
 const countries =[{name:'kenya',flag:'https://flagcdn.com/ke.svg'},{name:'uganda',flag:'https://flagcdn.com/ug.svg'},{name:'tanzania',flag:'https://flagcdn.com/tz.svg'},{name:'rwanda',flag:'https://flagcdn.com/rw.svg'},{name:'burundi',flag:'https://flagcdn.com/bi.svg'},{name:'south sudan',flag:'https://flagcdn.com/ss.svg'}];
  
  
export default function Home(){
  
 const [selectedCountry, setSelectedCountry] = useState(0);
const current = countries[selectedCountry];

  useEffect(()=>{
const timer=setInterval(()=>{
setSelectedCountry((prev)=>(prev+1)%countries.length);
},3000)
return()=>clearInterval(timer)
  },[])

  return(
    <div className="flex justify-center  h-screen">
      <div className="flex flex-col space-y-4 mt-20">
 <h1 className="text-2xl">Countries Animation</h1>
 <div className="bg-gray-200 h-10 w-full rounded-md flex p-2 justify-start items-center ">
        <img src={current.flag} alt={current.name} className="w-6 h-6"/>
      </div>
      </div>
     
     
    </div>
  );
}