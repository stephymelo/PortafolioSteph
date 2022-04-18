import * as React from 'react';
import Scroll, { Link } from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;

interface Links {
}

export const Links: React.FC<Links> = () => {
    return (
        <section className='linksmenu'>
            <ul className='linksmenu'>
                <li className='linksmenu__link'>
                    <Link to="banner"
                        spy={true}
                        smooth={true}
                        duration={300}
                        className='link'
                        activeClass='some-active-class'><span>Home</span></Link>
                </li>
                <li className='linksmenu__link'>
                    <Link to="about"
                        spy={true}
                        smooth={true}
                        duration={300}
                        className='link'
                        activeClass='some-active-class'><span>About</span></Link>
                </li>
                <li className='linksmenu__link'>
                    <Link to="work"
                        spy={true}
                        smooth={true}
                        duration={400}
                        className='link'
                        activeClass='some-active-class'><span>Work</span></Link>
                </li>
                <li className='linksmenu__link'>
                    <Link to="contact"
                        spy={true}
                        smooth={true}
                        duration={300}
                        className='link'
                        activeClass='some-active-class'><span>Contact</span></Link>
                </li>
            </ul>

        </section>
    );
}