import React from 'react'
// Import Icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
// Styles
import styled from 'styled-components'
import { About, Description, Image } from './styles'
import { useScroll } from './useScroll'

import { scrollRevbeal } from '../Animation'

const ServicesSection = () => {
   const [element, controls] = useScroll()
   return (
      <Services
         variants={scrollRevbeal}
         animate={controls}
         ref={element}
      >
         <Description>
            <h2>
               High <span>Quality</span> Services
            </h2>
            <Cards>
               <Card>
                  <div className='icon'>
                     <img src={clock} alt='clock icon' />
                     <h3>Efficient</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
                  <div className='icon'>
                     <img src={teamwork} alt='teamwork icon' />
                     <h3>Teamwork</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
                  <div className='icon'>
                     <img src={diaphragm} alt='diaphragm icon' />
                     <h3>Diaphragm</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
                  <div className='icon'>
                     <img src={money} alt='money icon' />
                     <h3>Affordable</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
            </Cards>
         </Description>
         <Image>
            <img src={home2} alt='camera' />
         </Image>
      </Services>
   )
}

const Services = styled(About)`
   h2 {
      padding-bottom: 5rem;
   }
   p {
      width: 70%;
      padding: 2rem 0 4rem 0;
   }
`
const Cards = styled.div`
   display: flex;
   flex-wrap: wrap;
   @media (max-width: 1300px) {
      justify-content: center;
      p {
         font-size: 1.3rem;
      }
   }
`
const Card = styled.div`
   flex-basis: 15rem;
   .icon {
      display: flex;
      align-items: center;

      h3 {
         margin-left: 1rem;
         background: #fff;
         color: #000;
         padding: 1rem;
      }
      @media (max-width: 1700px) {
         h3 {
            font-size: 0.95rem;
         }
      }
   }
`

export default ServicesSection
