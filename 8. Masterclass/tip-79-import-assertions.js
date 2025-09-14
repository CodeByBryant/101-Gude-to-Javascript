"use strict";

// Import assertions
// JSON modules
import data from "./data.json" assert { type: "json" };
console.log(data);

// CSS modules
import styles from "./styles.css" assert { type: "css" };
document.adoptedStyleSheets = [styles];

// Future possibilities
// import imageData from './image.png' assert { type: 'image' };
// import worker from './worker.js' assert { type: 'worker' };
