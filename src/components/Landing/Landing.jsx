import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import '../Landing/Landing.css';
import { ThemeContext } from '../../context/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

import Navbar from '../Navbar/Navbar';

function Landing() {
    return (
        <div className='landing'>
                <Navbar />
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaGithub
                                    className='landing--social'
                                    aria-label='GitHub'
                                />
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaXTwitter
                                    className='landing--social'
                                    aria-label='Twitter'
                                />
                            </a>
                        )}
                    </div>
                </div>

                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                />

                <div
                    className='landing--container-right'
                >
                    <div
                        className='lcr--content'
                    >
                        <div className='landtitle'>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>
                        </div>

                        <div className='lcr-buttonContainer'>
                            {headerData.resumePdf && (
                                <a
                                    href={headerData.resumePdf}
                                    download='resume'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <button className='resumeBtn'>Download CV</button>
                                </a>
                            )}
                            <NavLink
                                to='/#contacts'
                                smooth
                                spy={true}
                                duration={2000}
                            >
                                <button className='contactBtn'>Contact</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
