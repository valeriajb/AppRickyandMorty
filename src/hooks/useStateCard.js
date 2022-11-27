import { useState } from "react"

export const useStateCard=()=>{ 
    const [stateCard,setStateCard]=useState()
    return({stateCard,setStateCard})
}