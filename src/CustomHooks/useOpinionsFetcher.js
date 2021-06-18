import { useEffect, useState } from "react"

const useOpinionsFetcher = (fetcherFun) => {
    const [opinions, setOpinions] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            fetcherFun().then(({ data: { results } }) => {
                setOpinions(results)
            })
        }

        fetchData()

    }, [fetcherFun])

    return {
        opinions
    }
}

export default useOpinionsFetcher
