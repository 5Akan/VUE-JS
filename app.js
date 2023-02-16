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
            showBooks:true,
            books:[
                {title:'The Final Empire',author:'Brandon Sanderson'},
                {title:'The Way of the King',author:'Akanimoh Obot'},
                {title:'Its all Love',author:'Jenna Ortega'}
            ]
            // title:'The Final Empire',
            // author:'Brandon Sanderson',
            // age:50,
            // x:0,
            // y:0
        }
    },
 methods:{//Here we can work on what the variables(properties) above can do 
    toggleShowBooks(){
        this.showBooks = !this.showBooks;
    },
    handleEvent(a, data){
        //This arguement 'a' is an optional event object happens when there is an event
        console.log(a, a.type);
        if(data){
            console.log(data);
        }
    },
    handleMouseMove(e){
        //Use this to update the x,y properties via the optional event object
        this.x = e.offsetX;
        this.y = e.offsetY;
        
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
