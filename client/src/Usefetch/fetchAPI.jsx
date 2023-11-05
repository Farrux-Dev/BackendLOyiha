import { useEffect, useState } from "react"

export default  function Usefetch(url) {
    const [data, setdata] = useState(null)
    const [ispending, setispending] = useState(false)
    const [error , seterror] = useState(null)
    useEffect(()=>{
        const usedata =  async (value)=>{
          try {
            setispending(true)
            const res  = await fetch(url)   
            if(!res.ok){
                throw new Error(res.statusText)
            }
            const data = await res.json()
            setdata(data)
            setispending(false)
          } catch (error) {
            ispending(false)
            seterror(error.message)
          }
        }
        usedata()
    }, [url])
  return {data, ispending, error }
}

