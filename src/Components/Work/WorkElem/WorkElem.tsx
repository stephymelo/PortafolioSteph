import * as React from 'react';
import { WorkElemObj } from '../../../Types/WorkElemObj';


export type WorkElemProps = WorkElemObj & {


}

const WorkElem: React.FC<WorkElemProps> = ({ id, title, tags, tags2, description, image, link }) => {
  return (
    <section className='workElem'>
      <ol className='workElem__list'>
        <li className='workElem__tag'>{tags}</li>
        <li className='workElem__tag'>{tags2}</li>
      </ol>
      <h2 className='workElem__title'>{title}</h2>
      <a className='workElem__a' href={link} target="_blank">
        <img className='image' src={image}></img>
        
      </a>
      <p className='workElem__description'>{description}</p>

    </section>
  );
}

export default WorkElem;