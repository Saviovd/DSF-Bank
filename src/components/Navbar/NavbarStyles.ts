import { styled } from 'styled-components';

export const NavBarStyle = styled.section`
   margin-bottom: 0;

   display: flex;
   justify-content: space-between;
   padding: 4rem 2rem;

   .logo {
   }
   .navbar {
      .links {
         display: flex;
         gap: 2rem;
         .link_item {
            font-size: 1.7rem;
            color: #cbcbcb;
            padding: 1rem;

            @media screen {
               @media (max-width: 800px) {
                  font-size: 2.5rem;
                  padding: 0;
               }
            }
         }

         @media screen {
            @media (max-width: 800px) {
               flex-direction: column;
               position: absolute;
               width: 80vw;
               height: calc(100vh - 8rem);
               justify-content: center;
               align-items: center;
               gap: 7rem;
               margin: 0;
               padding: 0;
               border-left: 1px solid rgba(255, 255, 255, 0.6);
               background-color: black;
               z-index: 1;
               overflow: hidden;
            }
         }
      }

      .menu_button {
         display: none;

         @media screen {
            @media (max-width: 800px) {
               display: block;
               font-size: 4rem;
               cursor: pointer;
               z-index: 2;
            }
         }
      }

   }
`;
