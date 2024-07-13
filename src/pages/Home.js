import React from 'react'
import './home.css'
import GameSwiper from '../components/GameSwiper'
import GameCard from '../components/GameCard'

function Home({games}) {
  return (
    <section id='home' className='home active'>
        <div className='container-fluid'>
            <div className='row'>
                <GameSwiper games={games}/>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2 className='sectionTitle'>
                        Games on promotion
                    </h2>
                </div>
                <div className='col-lg-6 d-flex justify-content-end align-items-center'>
                    <a href="#" className='viewMore'> 
                        View More Games <i className='bi bi-arrow-right'></i>
                     </a>
                </div>
            </div>
            <div className='row'>
                {
                    games.slice(0,4).map(game=>(
                        <GameCard key={game._id} game={game}/>
                    ))
                }
            </div>


        </div>
    </section>
  )
}

export default Home