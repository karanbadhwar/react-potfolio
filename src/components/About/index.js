import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm a confident guy, always curious to learn about new technologies.
            I appreciate whatever I have got in my life.
          </p>
          <p>
            If I have to define myself in one sentence that would be a Caring
            and loving Son/Brother/Friend/BoyFriend. I'm a Huge Cristiano
            Ronaldo Fan, kind of Obssessed Fan, as Obssessed as I am with new
            Technologies.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#264de4" />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSass} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
