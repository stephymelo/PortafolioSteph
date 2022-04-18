import * as React from 'react';
import { Socials } from '../Socials/Socials';
import { Form } from './Form/Form';
import circlecontact from '../../Resources/Images/circleContact.png'

interface Contact {

}

export const Contact: React.FC<Contact> = () => {
    return (
        <section className='contact'>

            <article className='contact__article'>
            {/* <img className='circlecontact' src={circlecontact}></img> */}

                <article className='contact__article--1'>
                    <h1>Let's get in touch</h1>
                    <Form></Form>
                </article>
                <article className='contact__article--2'>
                    <article className='social'>
                        <h3>Stephanie Melo</h3>
                        <h4>stephymelo99@gmail.com</h4>
                        <h4>+57 301-2756755</h4>
                        <Socials></Socials>
                    </article>
                </article>
              


            </article>
           

        </section>
    );
}