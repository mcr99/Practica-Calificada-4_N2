import { useEffect, useState } from "react"


function useFetch(url){
    const [data, setData] = useState({})
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        setError(null)
        async function getData() {
            try{
                const answer = await fetch(url)
                if (!answer.ok) throw new Error("Something went wrong")
                const info = await answer.json()
                setData(info)
            } catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        getData()
    }, [url])
    return {data, error, loading}
}

export default useFetch