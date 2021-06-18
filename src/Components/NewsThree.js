import React from 'react'
import { timeCalculator } from '../Utils/Utils'

function NewsThree({ data: { article, index } }) {
    return (
        <div key={index} className="newsCard--3">
            {article.urlToImage ? (
                <img src={article.urlToImage} alt={`newsPhoto - ${index}`} />
            ) : <img src="https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg" alt="" />}
            <a href={article.url}><h3>{article.title}</h3></a>
            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="WSJTheme--clock-icon--1pt56K8O "><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" fill="#555"></path><path d="M9 9H5V8h3V4h1v5z" fill="#555"></path></svg>{timeCalculator(article.publishedAt)}</span>
        </div>
    )
}

export default NewsThree
