import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
   html,
   body {
      font-size: 10px;
      box-sizing: border-box;
	   height: 100%;
	   margin: 0;
	   padding: 0;
      color: white;
      overflow-x: hidden;
   }   

   body {
      font-family:  'Montserrat', sans-serif;
      background-color: #000;

      ul {
         padding: 0;
         li {
            list-style-type: none;
         }
      }

      a {
         text-decoration: none;
         color: white;
      }
   }
`;
