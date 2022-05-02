// import React, { useState } from 'react';
// import { Data } from './Data';
// import styled from 'styled-components';
// import { IconContext } from 'react-icons';
// import { FiPlus, FiMinus } from 'react-icons/fi';
// import './Faq.scss'

// const AccordionSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   position: relative;
//   height: 100vh;
//   background: #fff;
// `;

// const Container = styled.div`
//   position: absolute;
//   top: 30%;
//   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
// `;

// const Wrap = styled.div`
//   background: #272727;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   text-align: center;
//   cursor: pointer;
//   h1 {
//     padding: 2rem;
//     font-size: 2rem;
//   }
//   span {
//     margin-right: 1.5rem;
//   }
// `;

// const Dropdown = styled.div`
//   background: #1c1c1c;
//   color: #00ffb9;
//   width: 100%;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-bottom: 1px solid #00ffb9;
//   border-top: 1px solid #00ffb9;

//   p {
//     font-size: 2rem;
//   }
// `;

// const Accordion = () => {
//   const [clicked, setClicked] = useState(false);

//   const toggle = index => {
//     if (clicked === index) {
//       //if clicked question is already active, then close it
//       return setClicked(null);
//     }

//     setClicked(index);
//   };

//   return (
//     <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
//       <AccordionSection>
//         <Container>
//           {Data.map((item, index) => {
//             return (
//               <>
//                 <Wrap onClick={() => toggle(index)} key={index}>
//                   <h1>{item.question}</h1>
//                   <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
//                 </Wrap>
//                 {clicked === index ? (
//                   <Dropdown classNameNameName='dropdown'>
//                     <p>{item.answer}</p>
//                   </Dropdown>
//                 ) : null}
//               </>
//             );
//           })}
//         </Container>
//       </AccordionSection>
//     </IconContext.Provider>
//   );
// };

// export default Accordion;

import './Faq.scss'
import React from "react";

export default function Accordion() {
  return (
    <>
    <div className='section'>
    <div className="container-faq">
      <div className="accordion">
        <div className="accordion-item" id="question1">
          <a className="accordion-link" href="#question1">
            <div className="flex">
              <h3>What is Royalty?</h3>
              
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p> We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this</p>
          </div>
          <hr></hr>
      </div>
        <div className="accordion-item" id="question2">
          <a className="accordion-link" href="#question2">
            <div className="flex">
              <h3>How do i upload a song?</h3>
            
               
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr></hr>
      </div>
        <div className="accordion-item" id="question3">
          <a className="accordion-link" href="#question3">
            <div className="flex">
              <h3>Its royalty free?</h3>
             
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr></hr>
      </div>
        <div className="accordion-item" id="question4">
          <a className="accordion-link" href="#question4">
            <div>
              <h3>How can i get in contact with you?</h3>
             
            </div>
            <i className="icon ion-md-arrow-forward"></i>
            <i className="icon ion-md-arrow-down"></i>
          </a>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr></hr>
      </div>
     </div>
    </div>
    </div>
    </>
  );
}
