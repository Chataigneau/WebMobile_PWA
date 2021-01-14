importScripts("./src/service_worker/install.js"); 
importScripts("./src/service_worker/activate.js"); 
importScripts("./src/service_worker/fetch.js"); 

const cacheName = "galerie-v1";

const files = [
  "/",
  "/script.js",
  "images/sonic.png",
  "images/mario.png",
  "images/captain.png",
  "images/pika.png",
  "images/falco.png"
];