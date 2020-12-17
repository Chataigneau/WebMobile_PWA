function startSW()
{
  fetch('https://nicolaswebmobilepwa.netlify.app/');
  if ('serviceWorker' in navigator) 
  {
   navigator.serviceWorker .register("/sw.js") .then((reg) => 
   {
    console.log("votre service worker a étéenregistré!");}).catch((error) => 
    {
      console.error(error);
    });

  } 
  else 
  {
    console.warn("Service workers are notsupported.");
  }
}


function deleteSW(){
if ('serviceWorker' in navigator) {
 navigator.serviceWorker.getRegistrations()
 .then(registrations => {
 for (let registration of registrations){
 registrations.unregister();
 }};
}
}
