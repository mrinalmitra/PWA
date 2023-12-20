var deferredPrompt;

if(!window.Promise){
    window.Promise = Promise;
}

if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('/sw.js')
    .then(function(){
        console.log('SW registered')
    })
}

// disabling the default prompt for installing the app on homescreen
window.addEventListener('beforeinstallprompt',function(event){
    console.log('beforeinstallprompt fired')
    event.preventDefault();
    deferredPrompt = event;
    return false;
})