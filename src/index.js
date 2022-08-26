import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  Flex,
  CallToAction,
  ScrollDownIndicator
} from "react-landing-page";

//good images : https://cdn.wallpapersafari.com/49/28/PlbUCQ.jpg
//https://www.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_4044776.htm
//https://image.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg
//https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg

const App = (props) => (
  <Provider>
    <Hero
      color="white"
      //backgroundImage="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg"
      //backgroundImage="https://image.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg"
      backgroundImage="https://img.freepik.com/vector-gratis/fondo-negro-foco-luz_1017-27230.jpg?w=996&t=st=1661545183~exp=1661545783~hmac=f4d12f5e6e12155f243b36f6d131793223eae3b1f5b51723a619763acb7f848e"
      bg="black"
      bgOpacity={0.1}
    >
      <Heading fontSize={200}>NTI ar</Heading>
      <Subhead fontSize={[2 , 3]}>No Tengo Idea</Subhead>
      <Flex mt={3}>
         <CallToAction>Contactanos !!!</CallToAction>
      </Flex>
      </Hero>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
