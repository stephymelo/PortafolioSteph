import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import stephpapa from '../../Resources/Images/meSelfie.png';


interface About {

}

export const About: React.FC<About> = () => {




    return (
        <section className='about'>
            <article className='about__article'>

                <article className='about__article--1'>
                    <Parallax translateX={[-50, 10]} speed={10}>
                        {/* <h2>About</h2> */}
                    </Parallax>
                    <img className='imageselfie' src={stephpapa}/>
                  
                </article>



                <article className='about__article--2'>
                    <p className='paragraph'>I am an interactive media designer focused on UX/UI Design and Frontend Development with React. I enjoy creating unique experiences and innovative solutions to better people’s lives.</p>
                    <p className='paragraph'> I currently work on proyects with React, AWS and prototyping. I love designing and drawing sci-fi inspired artwork</p>
                    <p><a href='https://drive.google.com/file/d/1ISvexaos9Y0AO44slMD0rRmZ9U3TcTkD/view?usp=sharing' target='_blank'> --Download CV</a></p>
                </article>

            </article>
        </section>
    );
}