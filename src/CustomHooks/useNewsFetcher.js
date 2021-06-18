import { useEffect, useState } from "react"

const useNewsFetcher = (fetcherFun) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [articles, setArticles] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true)
            fetcherFun()
                .then(({ data: { articles } }) => {
                    setArticles(articles)
                    setIsLoading(false)
                })
                .catch((error) => {
                    setError('You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests.')
                    setIsLoading(false)
                })
        }

        fetchData()

    }, [fetcherFun])

    return {
        isLoading,
        error,
        articles
    }
}

export default useNewsFetcher