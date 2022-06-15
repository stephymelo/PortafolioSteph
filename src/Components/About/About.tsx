import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import stephpapa from '../../Resources/Images/photoedit.png';
import circleselfie from '../../Resources/Images/circlePurpleAbout.png';
import ellipse1 from './../../Resources/Images/Ellipse 145.png';
import ellipse3 from './../../Resources/Images/Ellipse 147.png';


interface About {

}

export const About: React.FC<About> = () => {




    return (
        <section className='about'>
            <article className='about__article'>
                <article className='about__article--1'>
                    <Parallax translateX={[-90, 10]} speed={6} startScroll={5} endScroll={1000}>
                        <img className='ellipseTitle' src={ellipse1}></img>
                        <h2 className='title'>About</h2>

                    </Parallax>
                </article>

                <article className='about__article--2'>
                    <img className='imageselfie' src={stephpapa} />
                </article>


                <article className='about__article--3'>
                    <div className='paragraph--containers'>
                        <p className='paragraph'>I am an interactive media designer focused on UX/UI Design and Frontend Development with React. I enjoy creating unique experiences and innovative solutions to better people’s lives.</p>
                        <p className='paragraph'> I currently work on proyects with React, AWS and prototyping. I love designing and drawing sci-fi inspired artwork</p>
                    </div>
                    <img className='ellipseParagraph' src={ellipse3}></img>

                    <a className='linkparagraph' href='https://drive.google.com/file/d/1ISvexaos9Y0AO44slMD0rRmZ9U3TcTkD/view?usp=sharing' target='_blank'>
                        <span className="iconLink material-symbols-outlined">
                            <p className='paragraphLink'>Download CV</p>
                            arrow_right_alt
                        </span>
                    </a>
                </article>
            </article>
            <svg className='circleseflie' width="645" height="647" viewBox="0 0 645 647" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_517_266)">
                    <ellipse cx="504.85" cy="430.511" rx="151.752" ry="9.0598" transform="rotate(-60 504.85 430.511)" fill="#C4C4C4" fill-opacity="0.15" />
                </g>
                <ellipse cx="322.307" cy="323.095" rx="226.873" ry="224.608" transform="rotate(-62.7295 322.307 323.095)" fill="url(#paint0_linear_517_266)" />
                <defs>
                    <filter id="filter0_f_517_266" x="386.563" y="257.012" width="236.573" height="347" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="21" result="effect1_foregroundBlur_517_266" />
                    </filter>
                    <linearGradient id="paint0_linear_517_266" x1="526.845" y1="72.8845" x2="77.6837" y2="582.137" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4334B2" />
                        <stop offset="0.562957" stopColor="#9939EF" />   
                        <stop offset="0.911458" stopColor="#63A4EA" />
                    </linearGradient>
                </defs>
            </svg>

            {/* <img className='circleseflie' src={circleselfie} /> */}


        </section>
    );
}