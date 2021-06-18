import React from 'react'

function Opinion({ data: { index, opinion } }) {
    return (
        <div key={index} className="opinion_card">
            <a href="https://www.wsj.com/"><h3>{opinion.content}</h3></a>
            <p>By {opinion.author}</p>
        </div>
    )
}

export default Opinion
