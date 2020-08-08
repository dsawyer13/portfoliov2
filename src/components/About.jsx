import React from 'react'
import './About.scss'
import me from '../assets/images/me.jpg'
import { motion } from "framer-motion"


export default function About() {
    return (
        <motion.div className='about-section'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }} 
        >
            <div className='about-container'>
                <div className='about-text'>
                    <p>
                        Hi, I'm Dylan!  I make websites for a living.<br />
                        Although I am most experienced with Javascript—I love learning—and will pick up the right tools for the job.
                    </p>
                    <p>
                        When I'm not programming, you can find me playing Teamfight Tactics, at the gym, or building mechanical keyboards.
                    </p>

                </div>
                <img src={me} target='_blank' rel="noreferrer noopener" alt='Me'/>
            </div>
        </motion.div>
    )
}
