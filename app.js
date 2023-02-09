const app = Vue.createApp(//Creates app
    {//object represents the root component in Vue, controls the app-element in htmls
    //data,functions or templates are set here 

    /**Below is the syntax for it to be accessed 
     * as a variable
     * function(){
     * return{}
     *  }
     */
    data(){//The function
        return{//returns an object
            title:'The Final Empire',
            author:'Brandon Sanderson',
            age:50
        }
    },
 methods:{//Here we can work on what the variables above can do 
    changeTitle(){
        console.log('Title');
    }
 }
});

app.mount('#app');  
 /**
  * 
     * After creating the app we mount it
     to the div element with id = app
     The view app only controls everything inside this div
    */

//Reacting to events using Vue eg. a click event

