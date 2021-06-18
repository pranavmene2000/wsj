import React from 'react'
import Header from '../Header/Header'

function Layout({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}

export default Layout
