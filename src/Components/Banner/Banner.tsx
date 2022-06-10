import * as React from 'react';
import circle from '../../Resources/Images/bannerCircle.png';
import grain from '../../Resources/Images/grain.png';
import circlepurple from '../../Resources/Images/circlepurple.png';
import elipse from '../../Resources/Images/elipse1.png';
import mainelipse from '../../Resources/Images/elipsebaner.png';
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
                </Parallax>
                <img className='elipse elipse--2' src={elipse}></img>
                <img className='elipse elipse--3' src={elipse2}></img>




                <Parallax className='circle' speed={-10}>
                    <img className='circle' src={circlepurple}></img>
                </Parallax>



                {/* <ol className='bloborderlist'>
                    <li className="bloblist">
                        <svg className='blob blob--1' width="90" height="147" viewBox="0 0 90 147" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0) translate(0, 0) rotate(0)">
                            <g opacity="0.9">
                                <path d="M8.74785 88.6376C28.5 69.6376 29 37.5 28.2478 24.6376C22.2479 -14.8624 73.2478 2.13762 73.2478 14.1376C73.2478 20.9383 71.2478 30.1376 82.7478 40.6376C94.2478 51.1376 90.7478 60.1376 79.2478 69.6376C67.7478 79.1376 63 112.5 61.8664 118.5C49.541 183.739 -24.2521 118.638 8.74785 88.6376Z" fill="url(#paint0_linear_264_285)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_264_285" x1="44.093" y1="0" x2="44.093" y2="142.154" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B83FFF" />
                                    <stop offset="1" stop-color="#3FF4FF" />
                                </linearGradient>
                            </defs>

                        </svg>

                    </li>
                    <li className="bloblist">
                        <svg className='blob blob--2' width="57" height="50" viewBox="0 0 57 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M18.0325 0.33516C30.1903 5.91092 35.7934 16.5575 38.5335 11.807C50.7869 -1.33511 59.8168 8.45743 55.5855 11.8072C53.1874 13.7057 47.083 15.8105 46.5908 22.7967C46.0985 29.7829 38.7593 26.024 32.1992 24.6209C25.6391 23.2177 35.7971 49.8631 14.8208 49.8633C-8.50191 49.8634 -1.75792 -2.92661 18.0325 0.33516Z" fill="url(#paint0_linear_264_286)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_264_286" x1="51.6443" y1="10.5167" x2="1.51885" y2="50.199" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B83FFF" />
                                    <stop offset="1" stop-color="#3FF4FF" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </li>
                    <li className="bloblist">
                        <svg className='blob blob--3' width="124" height="123" viewBox="0 0 124 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M25.6056 5.29232C61.2943 -14.6017 77.6566 34.9652 81.3767 62.2354C84.9158 70.4723 83.4437 69.8861 95.6136 76.4468C107.784 83.0074 140.269 99.9465 111.542 116.36C82.8149 132.774 78.3858 116.787 72.3724 84.81C66.359 52.8329 29.1942 67.5877 18.311 73.4854C7.42774 79.3832 -19.0053 30.1598 25.6056 5.29232Z" fill="url(#paint0_linear_264_300)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_264_300" x1="83.4912" y1="15.7485" x2="47.5543" y2="105.846" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B230FA" />
                                    <stop offset="0.880208" stop-color="#39FAFF" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </li>
                    <li className="bloblist">
                        <svg className='blob blob--4' width="79" height="96" viewBox="0 0 79 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M45.7233 83.4946C41.2926 56.238 19.1426 56.1537 12.2911 59.8874C-10.4547 63.2641 5.00415 13.6305 11.7008 14.4185C15.496 14.8651 20.3955 17.4594 27.6017 6.70524C34.8079 -4.04888 39.4206 0.0249818 43.3755 12.0925C47.3305 24.16 51.1641 39.0005 68.6082 32.5973C95.5811 71.9712 58.6008 118.303 45.7233 83.4946Z" fill="url(#paint0_linear_264_303)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_264_303" x1="31.5" y1="-3" x2="-5" y2="98" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B83FFF" />
                                    <stop offset="1" stop-color="#3FF4FF" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </li>
                </ol> */}


            </article>
            {/* <img className='grain' src={grain}></img> */}

            <article className='banner__article--2'>
                {/* <img className='circle' src={circle}></img>
                <img className='circleblur' src={circle}></img> */}
                <article className='info'>
                    <h1 className='title'>Hi,I'm Stephanie</h1>
                    <h2 className='subtitle'>UX Designer and Frontend</h2>
                    <Socials></Socials>
                </article>

            </article>
            <div className='grain'></div>

        </section>
    );
}