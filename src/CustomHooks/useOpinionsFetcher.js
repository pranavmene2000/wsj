import Axios from '../Axios'
import { useEffect, useState } from "react"

const useOpinionsFetcher = (endpoint) => {
    const [opinions, setOpinions] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            Axios.get(endpoint).then(({ data: { results } }) => {
                setOpinions(results)
            })
        }

        fetchData()

    }, [endpoint])

    return {
        opinions
    }
}

export default useOpinionsFetcher
