import React,{useState} from 'react'

import { useQuery } from "react-query";
import img from './icon.png'

export default function Popup() {
    const [cachedFact, setcachedFact] = useState("");
    const { data, isError,isLoading} = useQuery(
        ["fact"],
        async () => {
            let response = await fetch("https://htl-project-backend.prathameshdukare.repl.co/random")
            let json = await response.json();
            setcachedFact(json.facttext)
            return json
        }
    );
    if(!navigator.onLine){
        return <div className='popup-section'>
        <div className="hero">
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
        </div>
           <p className="fact-text">
             {cachedFact}
           </p>
              <p>Go Online see see new fact!</p>
        </div>
    }
    if (isLoading) {
        return <div className='popup-section'>
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
           <p className="fact-text">
             loading...
           </p>
        </div>
    }
    if (isError) {
        return <div className='popup-section'>
        <img className='img' src={img} alt="Eye" />
        <h1>Eye Fact</h1>
           <p className="fact-text">
             Unable to Fetch!
           </p>
        </div>
      }

  return (
    <div className='popup-section'>
    <img className='img' src={img} alt="Eye" />
    <h1>Eye Fact</h1>
       <p className="fact-text">
         {data.facttext}
       </p>
    </div>
  )
}
