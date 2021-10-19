import { Component } from '@angular/core';


@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})
export class NavbarComponent{
    brand:any = "Ashu's Cake Gallery"

    search(event:any){
        event.preventDefault()
        console.log("User is trying to search something")
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