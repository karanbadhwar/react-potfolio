import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/index'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_qjipm5n',
        'template_gg3g6ir',
        refForm.current,
        'YLD14nkyvO1OpIrtH'
      )
      .then(
        () => {
          alert('Message Successfully Sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the Message, Please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Karan Badhwar,
          <br />
          Canada,
          <br />
          Lawrence Ave E <br />
          Scarborough <br />
          <span>kbb914@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[43.77223, -79.25666]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.77223, -79.25666]}>
              <Popup>
                Karan lives over here.
                <br /> come over for a cup of coffee
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
