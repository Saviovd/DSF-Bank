import { styled } from 'styled-components';

export const HeaderStyle = styled.header`
   .container {
      max-width: 1600px;
      padding: 0 2rem;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-content: center;
      justify-content: center;
      margin: auto;
      height: 80vh;

      .content {
         margin: auto;
         max-width: 60rem;

         .caption {
            font-size: 1.5rem;
            text-transform: uppercase;

            @media screen {
               @media (max-width: 600px) {
                  font-size: 1.3rem;
               }
               @media (max-width: 350px) {
                  font-size: 1.2rem;
               }
            }
         }

         .title {
            margin: 0;
            font-weight: 500;
            font-size: 5.8rem;
            margin: 1rem 0 2rem 0;
            max-width: 50rem;
            background: linear-gradient(120deg, white 20%, black 140%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen {
               @media (max-width: 850px) {
                  margin: 0 auto;
                  max-width: 40rem;
               }
               @media (max-width: 600px) {
                  font-size: 4.5rem;
               }
               @media (max-width: 350px) {
                  font-size: 3.5rem;
               }
            }
         }

         .subtitle {
            font-size: 1.7rem;
            line-height: 2.7rem;

            @media screen {
               @media (max-width: 850px) {
                  width: 85%;
                  margin: 1.5rem auto;
               }
               @media (max-width: 600px) {
                  font-size: 1.35rem;
                  width: 94%;
               }
            }
         }

         @media screen {
            @media (max-width: 850px) {
               max-width: none;
               width: 100%;
               text-align: center;
            }
         }
      }

      .card_3d {
         height: 60vh;

         @media screen {
            @media (max-width: 350px) {
               height: 70vh;
            }
         }
      }

      @media screen {
         @media (max-width: 850px) {
            grid-template-columns: auto;
            height: 100vh;
         }
         @media (max-width: 350px) {
            height: auto;
            padding: 0;
         }
      }
   }
`;
({ ssr: true });
