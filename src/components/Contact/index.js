import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        const hoverTimeout = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_mf4o5el',
                'template_uamcv88',
                refForm.current,
                "-nTCi22NZqTMNyB6q"
            )
            .then(
                () => {
                    alert('Message successfully send!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again!')
                }
            )
    }


    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ','M','e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in professional opportunities, working in with a team in which I can learn and further develop my skills.  That said, if you have any other questions and would like to further discuss them with me, don't hesistate to contact me below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder="Email" required />
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder="Subject" required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder="Message" required></textarea>
                                </li>
                                <li className='send-button'>
                                    <input type="submit" className='flat-button' value="SEND" required />
                                </li>
                            </ul>

                        </form>
                    </div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" active/>
        </>
    )
}

export default Contact
