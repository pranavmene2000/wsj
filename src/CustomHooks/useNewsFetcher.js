import Axios from '../Axios'
import { useEffect, useState } from "react"

const useNewsFetcher = (endpoint) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [articles, setArticles] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            Axios.get(endpoint)
                .then(({ data: { articles } }) => {
                    setArticles(articles)
                    setIsLoading(false)
                    console.log(articles)
                })
                .catch(error => setError(error))
        }

        fetchData()

    }, [endpoint])

    return {
        isLoading,
        error,
        articles
    }
}

export default useNewsFetcher