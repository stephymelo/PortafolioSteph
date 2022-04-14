import * as React from 'react';


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
  
</section>
);
}