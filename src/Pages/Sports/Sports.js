import React from 'react'
import { fetchSports, fetchOpinions } from '../../API_ENDPOINTS/API_ENDPOINTS'
import NewsOne from '../../Components/NewsOne'
import NewsTwo from '../../Components/NewsTwo'
import NewsThree from '../../Components/NewsThree'
import Loader from '../../Components/Loader'
import Opinion from '../../Components/Opinion'
import useNewsFetcher from '../../CustomHooks/useNewsFetcher'
import useOpinionsFetcher from '../../CustomHooks/useOpinionsFetcher'

const Sports = () => {

    const { isLoading, error, articles } = useNewsFetcher(fetchSports)
    const { opinions } = useOpinionsFetcher(fetchOpinions)

    if (error) {
        return (
            <h2><em>{error}</em></h2>
        )
    }

    return (
        <React.Fragment>
            {!isLoading ? (
                <div className="layout">
                    <div className="layout__center">
                        <div className="border--top" />
                        <div className="flex">
                            <div className="flex_item flex--1">
                                {articles.slice(0, 7).map((article, index) => {
                                    return (
                                        <NewsOne data={{ article, index }} />
                                    )
                                })}
                            </div>
                            <div className="flex_item flex--2">
                                {articles.slice(7, 15).map((article, index) => {
                                    return (
                                        <NewsTwo data={{ article, index }} />
                                    )
                                })}
                            </div>
                            <div className="flex_item flex--3">
                                {articles.slice(15, 21).map((article, index) => {
                                    return (
                                        <NewsThree data={{ article, index }} />
                                    )
                                })}
                            </div>
                            <div className="flex_item flex--4">
                                <div className="opinion--header">
                                    <p>OPINION</p>
                                    <div className="forward--sign"></div>
                                </div>
                                <div className="opinions">
                                    {opinions.map((opinion, index) => {
                                        return (
                                            <Opinion data={{ opinion, index }} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="border--bottom" />
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </React.Fragment>
    );
}


export default Sports;
