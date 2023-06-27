import React from 'react'
import './portfolio-profile.css'
import IMG1 from '../../assets/expense.jpeg'
import IMG2 from '../../assets/groupchat.jpeg'
import IMG3 from '../../assets/ecommerce.jpeg'
import IMG4 from '../../assets/booking.jpeg'
const data=[
    {
        id:1,
        image:IMG1,
        title:'EXPENSE TRACKER APP',
        github:'https://github.com/Pandeyviii/expenseTracker',
        demo:'https://github.com/Pandeyviii/expenseTracker'
    },
    {
        id:2,
        image:IMG2,
        title:'GROUP CHAT APPLICATION',
        github:'https://github.com/Pandeyviii/Group-Chat-App',
        demo:'https://github.com/Pandeyviii/Group-Chat-App'
    },
    {
        id:4,
        image:IMG4,
        title:'BOOKING APPOINTMENT APP',
        github:'https://github.com/Pandeyviii/full-stack-booking-appointment-app',
        demo:'https://github.com/Pandeyviii/full-stack-booking-appointment-app'
    }
]
const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                            <a href={github} className='btn' target="_blank">Github</a>
                            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                            </div>
                            </article>
                        )
                    })
                }
    
     
    
    
            </div>
        </section>
      )
}

export default portfolio