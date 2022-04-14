import * as React from 'react';
import { WorkElemObj } from '../../Types/WorkElemObj';
import WorkElem from './WorkElem';
import flowerBehance from './../../Resources/Images/flowerBehance.png'


interface Work {

}

export const Work: React.FC<Work> = () => {
    const [workElems, setWorkElems] = React.useState<WorkElemObj[]>([
        {
            id: 0,
            title: 'Stephy',
            tags: 'Melo',
            tags2: 'Melo',
            description: 'Director',
            image: flowerBehance,
            link:'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'

        },
        {
            id: 1,
            title: 'Stephy',
            tags: 'Melo',
            tags2: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            link:'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'
        },
        {
            id: 2,
            title: 'Stephy',
            tags: 'Melo',
            tags2: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            link:'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'
        },
        {
            id: 3,
            title: 'Stephy',
            tags: 'Melo',
            tags2: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            link:'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'
        },
        {
            id: 4,
            title: 'Stephy',
            tags: 'Melo',
            tags2: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            link:'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'
        },
        {
            id: 5,
            title: 'Stephy',
            tags: 'Melo',
            tags2: 'Melo',
            description: 'Director',
            image: 'https://www.indiewire.com/wp-content/uploads/2017/10/screen-shot-2017-10-10-at-6-57-53-pm.png',
            link:'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'
        }

    ]);
    return (
        <section className='work'>
            <article className='work__article'>
                {
                    workElems.map((elem)=>{
                    return <WorkElem
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    tags={elem.tags}
                    tags2={elem.tags2}
                    description={elem.description}
                    image={elem.image}
                    link={elem.link}


                />})


                }
            </article>
        </section>
    );
}