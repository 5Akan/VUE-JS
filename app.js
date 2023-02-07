const app = Vue.createApp({//object represents the root component in Vue, controls the app-element in htmls
    //data,functions or templates are set here 

    /**Below is the syntax for it to be accessed 
     * as a variable
     * function(){
     * return{}
     *  }
     */
    data(){//The function
        return{
            title:'The Final Empire',
            author:'Brandon Sanderson',
            age:50
        }//returns an object
    }
});//Creates app

app.mount('#app');  
 /**
     * After creating the app we mount it
     to the div element with id = app
     The view app only controls everything inside this div
    */