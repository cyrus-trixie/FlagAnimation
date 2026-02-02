"use client"
import { useState , useEffect} from "react";
 const countries =[{name:'kenya',flag:'https://flagcdn.com/ke.svg'},{name:'uganda',flag:'https://flagcdn.com/ug.svg'},{name:'tanzania',flag:'https://flagcdn.com/tz.svg'},{name:'rwanda',flag:'https://flagcdn.com/rw.svg'},{name:'burundi',flag:'https://flagcdn.com/bi.svg'},{name:'south sudan',flag:'https://flagcdn.com/ss.svg'}];
  
  
export default function Home(){
  
 const [selectedCountry, setSelectedCountry] = useState(0);
const current = countries[selectedCountry];
const [isDisplay, setIsDisplay] =useState(false);

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
 
 <div className="bg-gray-200 h-10 relative w-full rounded-md flex p-2 space-x-2 justify-start items-center ">
        <img src={current.flag} alt={current.name} className="w-5 h-3"/>
        <input className="bg-gray-400 w-full rounded-sm border-none outline-none p-2 h-8 hover:cursor-pointer" placeholder="Choose a location" onClick={()=>(setIsDisplay((prev)=>!prev))}/> 
      {isDisplay &&<div className="bg-white absolute z-20 top-10 left-0 w-full rounded-md ">
         <ul className="flex flex-col space-y-2 p-4 text-black ">
         {countries.map((country, index) => (
  <li 
    key={index} 
    className="flex space-x-2 items-center hover:cursor-pointer hover:bg-gray-300 p-2 rounded-md" 
    onClick={() => setSelectedCountry(index)}
  >
    <img src={country.flag} alt={country.name} className="w-5 h-3" />
    <span className="capitalize">{country.name}</span>
  </li>
))}
</ul>

        </div> } 
      </div>

      </div>
     
     
    </div>
  );
}