const app = Vue.createApp({
    //data,functions or templetes
    template:`<h2>I am the template</h2>`
});//Creates app

app.mount('#app');  
 /**
     * After creating the app we mount it
     to the div element with id = app
     The view app only controls everything inside this div
    */