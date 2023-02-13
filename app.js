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
            age:50,
            showBooks:true
        }
    },
 methods:{//Here we can work on what the variables above can do 
    toggleShowBooks(){
        this.showBooks = !this.showBooks;
    },
    handleEvent(){
        console.log('event');
    }

    // changeTitle(value){
    //     //this.title = 'Lord of the Rings';//'this' allows us to access the properties above
    //     this.title = value;
    // }
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
//Conditional Rendering
