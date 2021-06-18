import React from 'react'
import { setDotter, timeCalculator } from '../Utils/Utils'

function NewsTwo({ data: { article, index } }) {
    return (
        <div key={index} style={{ textAlign: index === 0 ? 'center' : 'left' }} className="newsCard--2">
            {article.urlToImage ? (
                index === 0 && <img src={article.urlToImage} alt={`newsPhoto - ${index}`} />
            ) : index === 0 && <img src="https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg" alt="" />}
            {index === 0 && <div style={{ paddingTop: 5 }}><span className="WSJ--tag"><span className="diamond">◆</span> WSJ NEWS EXCLUSIVE</span></div>}
            {index === 0 ? <a href={article.url}><h3>{article.title}</h3></a> : <a href={article.url}><h3>{article.title}</h3></a>}
            {index === 0 && <img className="stylishLine" src="https://vir.wsj.net/fp/assets/webpack4/img/eyebrow.931ef682.svg" alt="" />}
            <p>
                {article.urlToImage ? (
                    (index === 1 || index === 4) && <img src={article.urlToImage} alt={`newsPhoto - ${index}`} />
                ) : <img src="https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg" alt="" />}
                {article.description + setDotter(article.description)} <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="WSJTheme--clock-icon--1pt56K8O "><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" fill="#555"></path><path d="M9 9H5V8h3V4h1v5z" fill="#555"></path></svg>{timeCalculator(article.publishedAt)}</span>
            </p>
        </div>
    )
}

export default NewsTwo
