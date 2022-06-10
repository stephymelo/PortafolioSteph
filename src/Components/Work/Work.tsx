import * as React from 'react';
import { WorkElemObj } from '../../Types/WorkElemObj';
import WorkElem from './WorkElem/WorkElem';
import flowerBehance from './../../Resources/Images/flowerbehance.png';
import hulubehance from './../../Resources/Images/hulubehance.png';
import gameitbehance from './../../Resources/Images/gameit.png';
import closebehance from './../../Resources/Images/closebehance.png';
import durexbehance from './../../Resources/Images/durexbehance.png';
import eficaciabehance from './../../Resources/Images/eficaciabehance.png';
import ellipse1 from './../../Resources/Images/Ellipse 145.png';
import ellipse2 from './../../Resources/Images/Ellipse 146.png';
import ellipse3 from './../../Resources/Images/Ellipse 147.png';





interface Work {

}

export const Work: React.FC<Work> = () => {
    const [workElems, setWorkElems] = React.useState<WorkElemObj[]>([
        {
            id: 0,
            title: 'Flower Web Concept',
            tags: 'UI Design',
            tags2: 'Web Design',
            description: 'Web design for a flower photography page',
            image: flowerBehance,
            link: 'https://www.behance.net/gallery/140085915/Web-Concept-for-flower-photography'

        },
        {
            id: 1,
            title: 'Hulu Redesign',
            tags: 'UX/UI Concept',
            tags2: 'App Design',
            description: 'Redesign for streaming service Hulu and mobile app concept',
            image: hulubehance,
            link: 'https://www.behance.net/gallery/97983565/Hulu-UXUI-Concept'
        },
        {
            id: 2,
            title: 'Close Research Case',
            tags: 'UX Research',
            tags2: 'UX/UI Concept',
            description: 'Research case to improve social interactions in videocall platforms for online classes with a high end prototype solution',
            image: closebehance,
            link: 'https://www.behance.net/gallery/121366485/CLOSE-UX-UI-Estudio-de-caso'
        },
        {
            id: 3,
            title: 'Gameit Research Case',
            tags: 'UX Research',
            tags2: 'UX/UI Concept',
            description: 'Research case to promote student participation in online classes with a high end prototype',
            image: gameitbehance,
            link: 'https://www.behance.net/gallery/106824267/Gameit'
        },
        {
            id: 4,
            title: 'Eficacia Research Case',
            tags: 'UX Research',
            tags2: 'UX/UI Design',
            description: 'Research case for company Eficacia to promote their products and increase clients. Finalized with a functional prototype, programmed in React TS',
            image: eficaciabehance,
            link: 'https://www.behance.net/gallery/132445691/Efipuntos-Prototype'
        },
        {
            id: 5,
            title: 'Durex Sex-Ed Campaign',
            tags: 'UX Research',
            tags2: 'UX/UI Concept',
            description: 'Concept for a campaign for the company Durex related to sexual education with a high end prototype',
            image: durexbehance,
            link: 'https://www.behance.net/gallery/109001471/Sexurados-Diseno-de-Interfaz'
        }

    ]);
    return (

        <section className='work'>
            <div className='work__ellipses'>
                <img className='ellip ellip--1' src={ellipse1}></img>
                <img className='ellip ellip--2' src={ellipse2}></img>
                <img className='ellip ellip--3' src={ellipse3}></img>

            </div>
            <article className='work__article'>
                {
                    workElems.map((elem) => {
                        return <WorkElem
                            key={elem.id}
                            id={elem.id}
                            title={elem.title}
                            tags={elem.tags}
                            tags2={elem.tags2}
                            description={elem.description}
                            image={elem.image}
                            link={elem.link}
                        />
                    })
                }
            </article>


        </section>

    );
}