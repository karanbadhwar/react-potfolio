import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import Loader from 'react-loaders'
// import portfolioData from '../../data/portfolio.json'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    getPortfolio()
  }, [])
  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'portfolio'))
    setPortfolio(
      querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id }
      })
    )
  }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((portfolio, idx) => {
          return (
            <div className={`image-box image-${15 + idx}`} key={idx}>
              <img
                src={portfolio.image}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{portfolio.name}</p>
                <h4 className="description">{portfolio.description}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(portfolio.url)}
                >
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
