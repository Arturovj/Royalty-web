import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import WikipediaSearch from "../WikipediaSearch/WikipediaSearch";
import "./Contenido.css";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#eb3449",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#eb3449",
  botFontColor: "#fff",
  userBubbleColor: "#0cb3c9",
  userFontColor: "#fff",
};

// export default class Contenido extends Component {

//     state = {
//         opened: false
//       }

//       toggleFloating = ({ opened }) => {
//         this.setState({ opened });
//       }

//     render() {

//         const { opened } = this.state;
//         return (
//             <div className='chatbot'>
//             <ThemeProvider theme={theme}>
//                 <ChatBot
//                     steps={[
//                         {
//                             id: "1",
//                             message: "Hello world. I am a chatbot. What's your name?",
//                             trigger: "2"
//                         },
//                         {
//                             id: "2",
//                             user: true,
//                             validator: (value) => {
//                                 if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
//                                     return true;
//                                 }
//                                 else {
//                                     return 'Please enter a valid name.';
//                                 }
//                             },
//                             trigger: "3"
//                         },
//                         {
//                             id: "3",
//                             message: "Hi {previousValue}, nice to meet you!",
//                             trigger: "4"
//                         },
//                         {
//                             id: "4",
//                             message: "Do you need anything from me?",
//                             trigger: "5"
//                         },
//                         {
//                             id: "5",
//                             options: [
//                                 {value: "y", label: "Yes", trigger: "6A"},
//                                 {value: "n", label: "No", trigger: "6B"},
//                             ]
//                         },
//                         {
//                             id: "6A",
//                             message: "Great! Tell me what are you looking for...",
//                             trigger: "seleccion"
//                         },
//                         {
//                             id: "6B",
//                             message: "Im sorry if I cannot be of help to you. See you later",
//                             end: true
//                         },
//                         {
//                             id: "seleccion",
//                             options: [
//                                 {value: "f", label: "Front-End", trigger: "7A"},
//                                 {value: "b", label: "Back-End", trigger: "7B"},
//                             ]
//                         },
//                         {
//                             id: "7A",
//                             message: "I see you like Front-End programming! Which of these frameworks would you like to know more about?",
//                             trigger: "seleccionFront"
//                         },
//                         {
//                             id: "7B",
//                             message: "I see you like Back-End programming! Which of these frameworks would you like to know more about?",
//                             trigger: "seleccionBack"
//                         },
//                         {
//                             id: "seleccionFront",
//                             options: [
//                                 {value: "Angular_(framework)", label: "Angular", trigger: "9"},
//                                 {value: "React", label: "React", trigger: "9"},
//                                 {value: "Vue.js", label: "Vue.js", trigger: "9"},
//                             ]
//                         },
//                         {
//                             id: "seleccionBack",
//                             options: [
//                                 {value: "Spring_Framework", label: "Spring", trigger: "9"},
//                                 {value: "Laravel", label: "Laravel", trigger: "9"},
//                                 {value: ".NET_Core", label: ".Net Core", trigger: "9"},
//                             ]
//                         },
//                         {
//                             id: "9",
//                             component: <WikipediaSearch />,
//                             asMessage: true,
//                             trigger: "preguntaVuelta"
//                         },
//                         {
//                             id: "preguntaVuelta",
//                             message: "Do you need to know anything else?",
//                             trigger: "respuestaVuelta",
//                         },
//                         {
//                             id: "respuestaVuelta",
//                             options: [
//                                 {value: "y", label: "Yes", trigger: "6A"},
//                                 {value: "n", label: "No", trigger: "6B"},
//                             ],
//                         }

//                     ]}
//                     floating={true}
//                     opened={opened}
//                     toggleFloating={this.toggleFloating}
//                 />
//             </ThemeProvider>
//             </div>
//         )
//     }
// }

// import React, { Component } from 'react';
// import ChatBot from 'react-simple-chatbot';

export default class Contenido extends Component {
  state = {
    opened: false,
  };

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  };

  render() {
    const { opened } = this.state;
    const steps = [
      {
        id: "1",
        message: "Hello world. I am a chatbot. What's your name?",
        trigger: "2",
      },
      {
        id: "2",
        user: true,
        validator: (value) => {
          if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
            return true;
          } else {
            return "Please enter a valid name.";
          }
        },
        trigger: "3",
      },
      {
        id: "3",
        message: "Hi {previousValue}, nice to meet you!",
        trigger: "4",
      },
      {
        id: "4",
        message: "Do you need anything from me?",
        trigger: "5",
      },
      {
        id: "5",
        options: [
          { value: "y", label: "Yes", trigger: "6A" },
          { value: "n", label: "No", trigger: "6B" },
        ],
      },
      {
        id: "6A",
        message: "Great! Tell me what are you looking for...",
        trigger: "seleccion",
      },
      {
        id: "6B",
        message: "Im sorry if I cannot be of help to you. See you later",
        end: true,
      },
      {
        id: "seleccion",
        options: [
          { value: "f", label: "What is Royalty?", trigger: "7A" },
          { value: "b", label: "You already know what Royalty is?", trigger: "7B" },
        ],
      },
      {
        id: "7A",
        message:
          "I see you like Music! Which of these options would you like to know more about?",
        trigger: "seleccionFront",
      },
      {
        id: "7B",
        message:
          "I see you like Back-End programming! Which of these frameworks would you like to know more about?",
        trigger: "seleccionBack",
      },
      {
        id: "seleccionFront",
        options: [
          { value: "Upload Music", label: "Upload Music", trigger: "9" },
          { value: "Buy Music", label: "Buy Music", trigger: "9" },
          { value: "More info", label: "More info", trigger: "9" },
        ],
      },
      {
        id: "seleccionBack",
        options: [
          { value: "Spring_Framework", label: "Spring", trigger: "9" },
          { value: "Laravel", label: "Laravel", trigger: "9" },
          { value: ".NET_Core", label: ".Net Core", trigger: "9" },
        ],
      },
      {
        id: "9",
        component: <WikipediaSearch />,
        asMessage: true,
        trigger: "preguntaVuelta",
      },
      {
        id: "preguntaVuelta",
        message: "Do you need to know anything else?",
        trigger: "respuestaVuelta",
      },
      {
        id: "respuestaVuelta",
        options: [
          { value: "y", label: "Yes", trigger: "6A" },
          { value: "n", label: "No", trigger: "6B" },
        ],
      },
    ];

    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          steps={steps}
          floating={true}
          opened={opened}
          toggleFloating={this.toggleFloating}
        />
      </ThemeProvider>
    );
  }
}
