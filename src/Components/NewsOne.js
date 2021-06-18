import React from 'react'
import { setDotter, timeCalculator } from '../Utils/Utils'

function NewsOne({ data: { article, index } }) {
    return (
        <div key={index} className="newsCard--1">
            {(index === 0 || index === 2) && <div style={index === 0 ? { paddingBottom: 3 } : { paddingTop: 5 }}><span className="WSJ--tag"><span className="diamond">◆</span> WSJ NEWS EXCLUSIVE</span></div>}
            {index === 0 ? <a href={article.url}><h1 style={{ marginTop: 0 }}>{article.title}</h1></a> : <a href={article.url}><h3>{article.title}</h3></a>}
            <p>
                {article.urlToImage ? (
                    (index === 2 || index === 5) && <img src={article.urlToImage} alt={`newsPhoto - ${index}`} />
                ) : <img src="https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg" alt="" />}
                {article.description + setDotter(article.description)} <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="WSJTheme--clock-icon--1pt56K8O "><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" fill="#555"></path><path d="M9 9H5V8h3V4h1v5z" fill="#555"></path></svg>{timeCalculator(article.publishedAt)}</span>
            </p>
        </div >
    )
}

export default NewsOne
