import * as React from 'react';
import { WorkElemObj } from '../../Types/WorkElemObj';


export type WorkElemProps = WorkElemObj & {


}

const WorkElem: React.FC<WorkElemProps> = ({id,title,tags,tags2,description,image,link}) => {
  return (
    <section className='workElem'>
      <ol>
        <li>{tags}</li>
        <li>{tags2}</li>
      </ol>
      <h2>{title}</h2>
      <a href={link} target="_blank">
      <img className='workImage' src={image}></img>
      </a>
      <p>{description}</p>
   
    </section>
  );
}

export default WorkElem;