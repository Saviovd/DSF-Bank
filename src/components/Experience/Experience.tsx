import { ExperienceStyle } from  './ExperiencesStyles';
import { experience } from '@/constants';

const Experience = () => {
   return (
      <ExperienceStyle>
         {experience.map((xp, i) => {
            return(
               <div key={i} className={`content ${xp.color}`}>
                  <h2 className='xp_title'>{xp.title}</h2>
                  <h3 className='xp_subtitle'>{xp.subtitle}</h3>
               </div>
            )
         })}
      </ExperienceStyle>
   )
}

export default Experience;
