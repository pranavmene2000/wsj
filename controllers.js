const {
    fetchBuisiness,
    fetchEntertainment,
    fetchSports,
    fetchGeneral,
    fetchHealth,
    fetchTechnlogy,
    fetchScience,
    fetchUnitedStates,
    fetchMarkets,
    fetchRealEstates,
    fetchPolitics,
    fetchOpinions
} = require('./Services')

module.exports = {
    businessController: (req, res) => {
        fetchBuisiness()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    entertainmentController: (req, res) => {
        fetchEntertainment()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    generalController: (req, res) => {
        fetchGeneral()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    healthController: (req, res) => {
        fetchHealth()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    sportsController: (req, res) => {
        fetchSports()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    technolofyController: (req, res) => {
        fetchTechnlogy()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    scienceController: (req, res) => {
        fetchScience()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    unitedStatesController: (req, res) => {
        fetchUnitedStates()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    marketsController: (req, res) => {
        fetchMarkets()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    realEstatesController: (req, res) => {
        fetchRealEstates()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
    politicsController: (req, res) => {
        fetchPolitics()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },

    opinionsController: (req, res) => {
        fetchOpinions()
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch((error) => {
                res.status(401).json(error)
            })
    },
}