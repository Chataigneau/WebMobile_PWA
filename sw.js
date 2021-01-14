importScripts("./src/service_worker/install.js"); 
importScripts("./src/service_worker/activate.js"); 
importScripts("./src/service_worker/fetch.js"); 

const cacheName = "galerie-v1";

const files = [
  "/",
  "/script.js",
  /*"https://nicolaswebmobilepwa.netlify.app/images/sonic.png",
  "https://nicolaswebmobilepwa.netlify.app/images/mario.png",
  "https://nicolaswebmobilepwa.netlify.app/images/captain.png",
  "https://nicolaswebmobilepwa.netlify.app/images/pika.png",
  "https://nicolaswebmobilepwa.netlify.app/images/falco.png",*/
  "https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js"
];