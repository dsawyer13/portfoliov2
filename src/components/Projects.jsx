import React from 'react'
import './Projects.scss'
import CS1 from '../assets/images/CS1.png'
import PG1 from '../assets/images/PG1.png'
import WP1 from '../assets/images/WP1.png'
import FT from '../assets/images/FT.png'
import { motion } from "framer-motion"


export default function Projects() {
    return (
        <motion.div className='projects-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className='project-row'>
                <div className='project-card-1'>
                    <img src={WP1} alt="Workout Pal App"/>
                    <div>
                        <span className='card-text'> 
                            <h3>Workout Pal</h3>
                            <p>Workout and Exercise Logging App built with React and Node</p>
                            <a href='https://github.com/dsawyer13/workout-pal' target='_blank' rel='noreferrer noopener' alt='GitHub'>Code</a>
                        </span>
                    </div>
                </div>

                <div className='project-card-2'>
                    <img src={PG1} alt="ProGift App" />
                    <div>
                        <span className='card-text'> 
                            <h3>ProGift</h3>
                            <p>Gift Regsitry App with Authentication built with jQuery and Node</p>
                            <a href='https://github.com/dsawyer13/pro-gift' target='_blank' rel='noreferrer noopener' alt='GitHub'>Code</a>
                        </span>
                    </div>
                </div>
            </div>

            <div className='project-row'>
                <div className='project-card-3'>
                    <img src={CS1} alt="ConSearch App" />
                    <div>
                        <span className='card-text'> 
                            <h3>ConSearch</h3>
                            <p>An App to search for Concerts and Music built with React Hooks</p>
                            <a href='https://github.com/dsawyer13/consearch' target='_blank' rel='noreferrer noopener' alt='GitHub'>Code</a>
                        </span>
                    </div>
                </div>

                <div className='project-card-4'>
                    <img src={FT} alt="Flask Todo App" />
                    <div>
                        <span className='card-text'> 
                            <h3>Flask Todo</h3>
                            <p>A simple Todo app built with Flask and Python</p>
                            <a href='https://github.com/dsawyer13/flask-todo' target='_blank' rel='noreferrer noopener' alt='GitHub'>Code</a>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
