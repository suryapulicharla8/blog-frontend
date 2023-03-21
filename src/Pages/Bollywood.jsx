import React, {useState, useEffect } from 'react'

import Card from '../Components/Card'
// import SmallCard from '../Component/SmallCard';
import SmallCard from '../Components/SmallCard'

const Bollywood = () => {
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        fetch("https://blog-backend-mdq3.onrender.com/bollywood")
        
        .then(res=>(res.json()))
        .then((res)=>setDetail(res))
        .catch((error)=>console.log(error))
    },[])
    console.log(detail)
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>BOLLYWOOD</h1>
            <h1 style={{ margin: "20px 0px 20px 34.15%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((item) => (
                            <Card
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((item) => (
                            <SmallCard
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                description={item.description.slice(0, 200)}
                                title={item.title.slice(0, 25)}
                                author={item.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Bollywood;