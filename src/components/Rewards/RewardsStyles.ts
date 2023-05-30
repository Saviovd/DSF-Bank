import styled from 'styled-components';

export const RewardStyle = styled.section`
   max-width: 1600px;
   margin: 3rem auto;
   padding: 0 2.5rem;

   display: grid;
   grid-template-columns: repeat(2, 1fr);
   .content {
      max-width: 56rem;

      .title {
         display: inline-block;
         margin: 0;
         font-weight: 500;
         font-size: 5rem;
         text-align: center;
         width: 100%;
         background: linear-gradient(90deg, white 20%, black 140%);
         background-clip: text;
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;

         @media screen {
            @media (max-width: 600px) {
               font-size: 3.2rem;
            }
         }
      }

      .item {
         &:first-of-type {
            margin: 6rem 0;

            @media screen {
               @media (max-width: 600px) {
                  margin: 3rem 0;
               }
            }
         }

         .item_title {
            display: inline-block;
            margin: 1rem 0 0.5rem 0;
            font-weight: 500;
            font-size: 1.9rem;
         }
         .light {
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2.5rem;
            opacity: 0.6;
            max-width: 42rem;
            margin: 0;

            @media screen {
               @media (max-width: 900px) {
                  margin: 0 auto;
                  font-size: 1.5rem;
                  max-width: none;
                  width: 85%;
               }
            }
         }
      }

      @media screen {
         @media (max-width: 900px) {
            max-width: none;
            width: 100%;
            text-align: center;
         }
      }
   }

   .planet_3d {
      height: 70vh;
      max-height: 805px;
      max-width: 590px;
      @media screen {
         @media (max-width: 900px) {
            height: 50vh;
            max-width: none;
         }
         @media (max-width: 350px) {
            height: 60vh;
         }
      }
   }

   @media screen {
      @media (max-width: 900px) {
         grid-template-columns: auto;
         height: 100vh;
         padding-top: 5rem;
      }
      @media (max-width: 600px) {
         padding: 0;
         height: auto;
      }
   }
`;
