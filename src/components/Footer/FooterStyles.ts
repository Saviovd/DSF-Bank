import styled from 'styled-components';

export const FooterStyle = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   max-width: 1600px;
   padding: 0 2rem;
   height: 27vh;
   border-top: 1px solid rgba(255, 255, 255, 0.6);
   border-radius: 0.3rem;
   margin: auto;

   .container1 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding-top: 2rem;

      .slogan {
         font-size: 1.4rem;
         opacity: 0.6;
         margin: 0;
         transform: translateY(-10px);
         max-width: 20rem;
      }

      .list {
         .links {
            font-size: 1.6rem;
         }

         .item {
            color: white;
            opacity: 0.6;
            font-size: 1.5rem;
            margin: 0.5rem 0;
         }
      }

      @media screen {
         @media (max-width: 600px) {
            grid-template-columns: none;
         }
      }
   }

   .container2 {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 1.5rem;

      position: relative;
      .copy {
         font-size: 1.5rem;
         opacity: 0.7;

         @media screen {
            @media (max-width: 600px) {
               font-size: 1.3rem;
            }
         }
      }
      .contact_list {
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: center;
         position: relative;
         right: 0;
         .item {
            font-size: 2rem;
         }

         @media screen {
            @media (max-width: 600px) {
               bottom: 2rem;
            }
         }
      }
   }
`;
