import * as React from 'react';
import { Links } from './Links/Links';


interface Header {

}

export const Header: React.FC<Header> = () => {
    return (
<section className='header'>
    <article className='menu'>
    <hr className='menu__line'></hr>
    <hr className='menu__line2'></hr>
    <hr className='menu__line'></hr>
    </article>
    <article className='nav'>
        <Links></Links>
    </article>
  
</section>
);
}