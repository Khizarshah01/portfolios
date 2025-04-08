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
// Styled Components

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.primary,
    color: theme.secondary,
    borderRadius: '30px',
    textTransform: 'inherit',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: 'var(--primaryFont)',
    border: `3px solid ${theme.primary}`,
    transition: '100ms ease-out',
    '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
    },
    '@media (max-width: 600px)': {
        display: 'none',
    },
}));

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    return (
        <div className='landing'>
                <Navbar />
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
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
                                    style={{ color: theme.secondary }}
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
                                    style={{ color: theme.secondary }}
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
                                    style={{ color: theme.secondary }}
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
                    style={{
                        opacity: drawerOpen ? '0' : '1',
                        borderColor: theme.secondary,
                    }}
                />

                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
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
