import * as React from 'react';
import Scroll, { Link } from 'react-scroll';
import { useEffect } from 'react';
const ScrollLink = Scroll.ScrollLink;

interface Links {
}

export const Links: React.FC<Links> = () => {
    const [state, setState] = React.useState(false)

    const handleBurgerView = () => {
        setState(current => !current)
    }
    return (
        <section className='linksmenu'>
            <nav className='menuWeb'>
                <ul className='linksmenu'>
                    <li className='linksmenu__link'>
                        <Link to="banner"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>Home</span></Link>
                    </li>
                    <li className='linksmenu__link'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>About</span></Link>
                    </li>
                    <li className='linksmenu__link'>
                        <Link to="work"
                            spy={true}
                            smooth={true}
                            duration={400}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>Work</span></Link>
                    </li>
                    <li className='linksmenu__link'>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>Contact</span></Link>
                    </li>
                </ul>
            </nav>

            <div onClick={handleBurgerView} className="burgerMenu">
                <hr className='burgerLine'></hr>
                <hr className='burgerLine'></hr>
                <hr className='burgerLine'></hr>
            </div>

            {state ? <nav className='burgerNavigation'>
                <ul className='linksmenu'>
                    <li className='linksmenu__link'>
                        <Link to="banner"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>Home</span></Link>
                    </li>
                    <li className='linksmenu__link'>
                        <Link to="about"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>About</span></Link>
                    </li>
                    <li className='linksmenu__link'>
                        <Link to="work"
                            spy={true}
                            smooth={true}
                            duration={400}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>Work</span></Link>
                    </li>
                    <li className='linksmenu__link'>
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            duration={300}
                            className='link'
                            activeClass='some-active-class'><span className='spanLink'>Contact</span></Link>
                    </li>
                </ul>

            </nav> : ' '}


        </section>
    );
}