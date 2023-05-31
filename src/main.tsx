import React, { StrictMode } from "react";
import { createRoot } from "react-dom";

import './styles/main.css';

import CarouselContainer from "./CarouselContainer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CarouselContainer />
  </StrictMode>
);
