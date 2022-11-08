import { useState } from "react";

export function useMenuNav(){
    const [stateMenu,setStateMenu]=useState(false)

    const changeStateMenu=()=>{
        (stateMenu)?setStateMenu(false):setStateMenu(true)
    }
    return {stateMenu,changeStateMenu}


}