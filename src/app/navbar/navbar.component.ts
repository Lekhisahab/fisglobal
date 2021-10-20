import { Component, Input } from '@angular/core';


@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent{
    @Input() brand:any
    isloggedin:any =  false 


    ngDoCheck(){
        if(localStorage.token){
            this.isloggedin = true
        }
        else{
            this.isloggedin = false
        }
    }

    logout(){
        localStorage.clear()
    }
    searchtext:any = "Red Velvet"

    search(event:any){
        event.preventDefault()
        console.log("User is trying to search something" , this.searchtext)
    }

    demo(){
        alert()
    }

    

}


// create a folder with the component name 
// create 3 files inside that componentname.component.html ,.ts ,.css

// inside ts file create a class and make it as a component class with @Component

// mention that class name into declarations array of app.module.ts

// component is ready to use now 

// use it by the name of the tag u have mentioned into selector tag