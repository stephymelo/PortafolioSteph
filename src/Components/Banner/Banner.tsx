import * as React from 'react';
import circle from '../../Resources/Images/bannerCircle.png';
import grain from '../../Resources/Images/grain.png';
import circlepurple from '../../Resources/Images/circleBanner.png';
import elipse from '../../Resources/Images/elipse1.png';
import mainelipse from '../../Resources/Images/ellipseBannerNoblur.png';
import elipse2 from '../../Resources/Images/elipse2.png';
import blobs from '../../Resources/Images/blobsbg.png';
import { Socials } from '../Socials/Socials';
import { ParallaxProvider, ParallaxBanner, Parallax } from "react-scroll-parallax";

interface Banner {

}

export const Banner: React.FC<Banner> = () => {

    return (
        <section className='banner'>





            <article className='banner__article--1'>
                <Parallax className='elipse elipse--1' speed={-10}>
                    <img className='elipse elipse--1' src={mainelipse}></img>
                    <img className='elipse elipse--2' src={elipse}></img>
                    <img className='elipse elipse--3' src={elipse2}></img>
                </Parallax>
                <Parallax className='circleheader' speed={-20}>
                    <img className='circle2' src={circlepurple}></img>
              

                </Parallax>
            </article>
            <article className='banner__article--2'>

                <article className='info'>
                    <h1 className='title'>Hi,I'm Stephanie</h1>
                    <h2 className='subtitle'>UX Designer and Frontend</h2>
                    <Socials></Socials>
                </article>

            </article>


        </section>
    );
}