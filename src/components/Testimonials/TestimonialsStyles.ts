import { styled } from 'styled-components';

export const TestimonialStyle = styled.section`
   max-width: 1600px;
   padding: 3rem 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 6rem;
   margin: auto;

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
            font-size: 3.5rem;
         }
      }
   }

   .list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;

      .item {
         background-color: #14151a;
         padding: 3rem 3rem 1rem 3rem;
         border-radius: 2rem;
         .heading {
            display: flex;
            margin-bottom: 3rem;
            .avatar {
               border-radius: 100%;

               @media screen {
                  @media (max-width: 600px) {
                     width: 60px;
                     height: 60px;
                  }
               }
            }

            .about {
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               margin-left: 0.9rem;
               .name {
                  font-weight: 500;
                  font-size: 1.6rem;
                  margin: 0;

                  @media screen {
                     @media (max-width: 600px) {
                        font-size: 1.4rem;
                     }
                  }
               }
               .role {
                  font-weight: 400;
                  font-size: 1.4rem;
                  opacity: 0.6;
                  @media screen {
                     @media (max-width: 600px) {
                        font-size: 1.3rem;
                     }
                  }
               }

               @media screen {
                  @media (max-width: 600px) {
                     margin-left: 0.6rem;
                  }
                  @media (max-width: 350px) {
                     margin: 0;
                  }
               }
            }

            @media screen {
               @media (max-width: 350px) {
                  flex-direction: column;
                  align-items: center;
                  text-align: center;
                  margin-bottom: 2rem;
               }
            }
         }
         .comment {
            font-weight: 400;
            font-size: 1.5rem;
            opacity: 0.6;

            @media screen {
               @media (max-width: 600px) {
                  font-size: 1.4rem;
                  margin: 0.5rem;
                  transform: translateY(-10px);
               }
               @media (max-width: 350px) {
                  text-align: center;
                  margin: 0;
               }
            }
         }

         @media screen {
            @media (max-width: 600px) {
               padding: 1rem 1rem 0.5rem 1rem;
            }
         }
      }
   }

   @media screen {
      @media (max-width: 600px) {
         padding: 2rem 0rem;
      }
   }
`;
