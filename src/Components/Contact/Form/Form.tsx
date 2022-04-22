import * as React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



interface Form {

}

export const Form: React.FC<Form> = () => {


    const formy = useRef();


    const [firstname, setFirstname] = React.useState('');
    const handleFirstChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFirstname(event.target.value);
    }

    const [email, setEmail] = React.useState('');
    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    }

    const [message, setMessage] = React.useState('');
    const handleMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setMessage(event.target.value);
    }

    const handleSendEmail = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        emailjs.sendForm('service_d93hzrf', 'template_48jh3cg', e.target, 'user_icyl4TR2VjnQQKOPqqKvg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setMessage('');
        setFirstname('');
        setEmail('');

    };
    return (
        <section className='contactForm'>
            <form className='contactForm__form' onSubmit={handleSendEmail}>
                <article className='contactForm__form--1'>
                    <div className='names'>
                        <div className='input'>
                            <input placeholder='Name' type="text" name="name"
                                onChange={handleFirstChange}
                                value={firstname} />
                        </div>
                    </div>
                    <div className='input'>    
                        <input placeholder='Email' type="text" name="email"
                            onChange={handleEmailChange}
                            value={email} />
                    </div>
                </article>

                <article className='contactForm__form--2'>
                    <div className='input'>
                        <textarea placeholder='Message' name="message"
                            onChange={handleMessageChange}
                            value={message} />
                    </div>
                    <button type="submit" value="Send" className='contactformBtn'>Send</button>
                </article>
            </form>
        </section>
    );
}