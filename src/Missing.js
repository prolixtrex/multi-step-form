import React from 'react'
import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <main className='missing'>
            <h1 className='title'>Page not found</h1>
            <p>Sorry, the page you are looking for is not found.</p>
            <Link to={`/`}>Click here to go back to subscription page</Link>
        </main>
    )
}

export default Missing