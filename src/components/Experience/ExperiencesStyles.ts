import styled from 'styled-components';

export const ExperienceStyle = styled.section`
   max-width: 1600px;
   margin: 4rem auto;
   padding: 0 2rem;

   display: grid;
   grid-template-columns: repeat(2, 1fr);
   justify-items: center;

   .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;

      &:first-child {
         border-right: 1px solid rgba(108, 122, 137, 0.6);
      }
      &.blue::after,
      &.orange::after {
         content: '';
         display: block;
         width: 100%;
         height: 30rem;
         position: absolute;
         top: -85%;
      }

      &.blue::after {
         background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(135, 235, 207, 0.15) 0%,
            rgba(89, 158, 219, 0.15) 52.6%,
            rgba(123, 104, 238, 0.15) 100%
         );
         filter: blur(7rem);
         -webkit-filter: blur(7rem);
      }
      &.orange::after {
         background: radial-gradient(
            50% 50% at 50% 50%,
            rgba(135, 235, 207, 0.15) 0%,
            rgba(254, 225, 43, 0.15) 0.01%,
            rgba(255, 182, 193, 0.15) 52.6%,
            rgba(255, 160, 122, 0.15) 100%
         );
         filter: blur(7rem);
         -webkit-filter: blur(7rem);
      }

      .xp_title {
         margin: 0;
         font-weight: 500;
         font-size: 5.8rem;
         width: 100%;
         background: linear-gradient(90deg, white 20%, black 140%);
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;

         @media screen {
            @media (max-width: 600px) {
               font-size: 4.5rem;
            }
            @media (max-width: 350px) {
               font-size: 3.5rem;
            }
         }
      }
      .xp_subtitle {
         font-size: 1.7rem;
         line-height: 2rem;
         font-weight: 500;
         margin: 0 5px;

         @media screen {
            @media (max-width: 600px) {
               font-size: 1.4rem;
            }
            @media (max-width: 350px) {
                  font-size: 1.25rem;
               }
         }
      }
   }

   @media screen {
      @media (max-width: 600px) {
         margin: 1rem 0;
         padding: 0 0.5rem;
      }
   }
`;
