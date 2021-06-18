import { API_KEY } from "../config/config"
import Axios, { AXIOS } from '../Axios'

const fetchBuisiness = async () => await Axios.get(`/top-headlines?category=business&language=en&apiKey=${API_KEY}`)
const fetchEntertainment = async () => await Axios.get(`/top-headlines?category=entertainment&language=en&apiKey=${API_KEY}`)
const fetchGeneral = async () => await Axios.get(`/top-headlines?category=general&language=en&apiKey=${API_KEY}`)
const fetchHealth = async () => await Axios.get(`/top-headlines?category=health&language=en&apiKey=${API_KEY}`)
const fetchSports = async () => await Axios.get(`/top-headlines?category=sports&language=en&apiKey=${API_KEY}`)
const fetchTechnlogy = async () => await Axios.get(`/top-headlines?category=technology&language=en&apiKey=${API_KEY}`)
const fetchScience = async () => await Axios.get(`/top-headlines?category=science&language=en&apiKey=${API_KEY}`)
const fetchUnitedStates = async () => await Axios.get(`/top-headlines?country=us&apiKey=${API_KEY}`)
const fetchMarkets = async () => await Axios.get(`/everything?q=markets&language=en&apiKey=${API_KEY}`)
const fetchRealEstates = async () => await Axios.get(`/everything?q=real estates&language=en&apiKey=${API_KEY}`)
const fetchPolitics = async () => await Axios.get(`/everything?q=politics&language=en&apiKey=${API_KEY}`)

const fetchOpinions = async () => await AXIOS.get(`https://quotable.io/quotes?tags=technology,famous-quotes`)

export {
    fetchBuisiness,
    fetchEntertainment,
    fetchGeneral,
    fetchHealth,
    fetchSports,
    fetchTechnlogy,
    fetchScience,
    fetchUnitedStates,
    fetchMarkets,
    fetchRealEstates,
    fetchPolitics,

    fetchOpinions
}