import React from 'react'
import styled from 'styled-components'
import { About } from './styles'
import Toggle from './Toggle'
// Framer Motion
import { AnimateSharedLayout } from 'framer-motion'
import { scrollRevbeal } from '../Animation'
import { useScroll } from './useScroll'

const FaqSection = () => {
   const [element, controls] = useScroll()
   return (
      <Faq ref={element} variants={scrollRevbeal} animate={controls}>
         <h2>
            Any questions? <span>FAQ</span>
         </h2>
         <AnimateSharedLayout>
            <Toggle title='How Do I Start'>
               <div className='answer'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Doloremque, obcaecati!
                  </p>
               </div>
            </Toggle>
            <Toggle title='Daily Schedule'>
               <div className='answer'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Doloremque, obcaecati!
                  </p>
               </div>
            </Toggle>
            <Toggle title='Different Payment Methods'>
               <div className='answer'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Doloremque, obcaecati!
                  </p>
               </div>
            </Toggle>
            <Toggle title='What Products Do You Offer'>
               <div className='answer'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                     Lorem, ipsum dolor sit amet consectetur
                     adipisicing elit. Doloremque, obcaecati!
                  </p>
               </div>
            </Toggle>
         </AnimateSharedLayout>
      </Faq>
   )
}

const Faq = styled(About)`
   display: block;
   span {
      display: block;
   }
   h2 {
      padding-bottom: 2rem;
      font-weight: lighter;
   }
   .faq-line {
      background: #ccc;
      height: 0.2rem;
      margin: 2rem 0;
      width: 100%;
   }
   .question {
      padding: 3rem 0;
      cursor: pointer;
   }
   .answer {
      padding: 2rem 0;
      p {
         padding: 1rem 0;
      }
      @media (max-width: 1300px) {
      justify-content: center;
      p {
         font-size: 1.2rem;
      }
   }
   }
`

export default FaqSection
