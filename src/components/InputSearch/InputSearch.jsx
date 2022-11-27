import React, { useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import './InputSarch.css'
function InputSearch({setSearch}) {
 
    return (
    <div className='container-search'>   
        <input className='input-search' onChange={(e)=>setSearch(e.target.value)}placeholder="Haz tu busquedad"></input>
        <BsSearch/>
    </div>
  )
}

export default InputSearch