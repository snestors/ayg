import { useEffect, useState } from "react"

export const useDebounce = (value, delyar = 500) =>{

    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(()=>{
    
        const timeout = setTimeout(()=>{
            setDebounceValue(value);
        }, delyar);

        return () => clearTimeout(timeout);

    }, [value, delyar]);



    return debounceValue;
}