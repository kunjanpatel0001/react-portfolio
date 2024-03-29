import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['k','u','n','j','a','n']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]  

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);
    
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img 
                        src={LogoTitle} 
                        alt="developer" 
                    />
                    <AnimatedLetters 
                        letterClass = {letterClass}
                        strArray = {nameArray}
                        idx = {15} 
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass = {letterClass}
                        jobArray = {nameArray}
                        strArray = {jobArray}
                        idx = {22} 
                    />
                </h1>
                <h2> Frontend Developer / Javascript Expert</h2>
                <Link to="/contact" className="flat-bottom"> CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home