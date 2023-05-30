import styled from 'styled-components';

export const ResourcesStyles = styled.section`
   max-width: 1600px;
   margin: 0 auto;
   padding: 2.5rem 2rem;
   .container {
      background-color: #14151a;
      padding: 7rem 2.5rem;
      text-align: center;
      margin: 10rem 0;
      border-radius: 2rem;
      .title {
         display: inline-block;
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
               font-size: 4rem;
            }
            @media (max-width: 350px) {
               font-size: 3rem;
               font-weight: 600;
            }
         }
      }
      .subtitle {
         font-weight: 400;
         font-size: 1.6rem;
         line-height: 2.5rem;
         margin: 2rem auto 8rem auto;

         &.light {
            opacity: 0.6;
         }

         @media screen {
            @media (max-width: 350px) {
               font-size: 1.4rem;
               line-height: 2rem;
               margin:  1rem auto 6rem auto;
            }
         }
      }

      .list {
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         align-content: center;

         .item {
            max-width: 32rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;

            svg {
               width: 3.8rem;
               height: 3.8rem;
            }
            .item_title {
               display: inline-block;
               margin: 1rem 0;
               font-weight: 500;
               font-size: 1.9rem;
            }
            .item_subtitle {
               font-weight: 400;
               font-size: 1.5rem;
               line-height: 2.5rem;
               opacity: 0.6;
            }

            @media screen {
               @media (max-width: 600px) {
                  padding: 3rem 0;
               }
            }
         }

         @media screen {
            @media (max-width: 600px) {
               grid-template-columns: none;
            }
         }
      }

      @media screen {
         @media (max-width: 600px) {
            padding: 3rem 1rem;
            margin: 5rem 1rem;
         }
      }
   }

   @media screen {
      @media (max-width: 600px) {
         padding: 0;
      }
   }
`;
