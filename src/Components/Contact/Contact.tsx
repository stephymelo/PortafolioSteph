import * as React from 'react';
import { Socials } from '../Socials/Socials';
import { Form } from './Form/Form';
import circlecontact from '../../Resources/Images/circleContact.png';
import { ParallaxProvider, ParallaxBanner, Parallax } from "react-scroll-parallax";


interface Contact {

}

export const Contact: React.FC<Contact> = () => {
    return (
        <section className='contact'>

            <article className='contact__article'>
                <Parallax className='circlecontact' speed={-10}>
                    <img className='circlecontact__img' src={circlecontact}></img>
                </Parallax>

                <article className='contact__article--1'>
                    <h1 className='contact--title'>Let's get in touch</h1>
                    <Form></Form>
                </article>
                <article className='contact__article--2'>
                    <article className='social'>
                        <h3 className='social--1'>Stephanie Melo</h3>
                        <h3 className='social--2'>stephymelo99@gmail.com</h3>
                        <h3 className='social--3'>+57 301-2756755</h3>
                        <Socials></Socials>
                    </article>
                </article>



            </article>


        </section>
    );
}