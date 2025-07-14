import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewNews = () => {

    const [news, changeNews] = useState(


        { "status": "ok", "totalResults": 34, "articles": [] }

    )

    const fetchData=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response)=>{
                changeNews(response.data)
            }
        ).catch()
    }


    useEffect(()=>{fetchData()},[])

    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {news.articles.map(
                                (value, index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                            <div class="card">
                                                <img src={value.urlToImage} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <p class="card-text">{value.source.name}</p>
                                                    <p class="card-text text-primary">{value.title}</p>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">{value.author}</p>
                                                    <p class="card-text">{value.content}</p>
                                                    <p class="card-text">{value.publishedAt}</p>
                                                    
                                                </div>
                                            </div>

                                        </div>

                                    )
                                }
                            )}


                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewNews