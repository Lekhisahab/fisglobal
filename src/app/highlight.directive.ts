import { Directive, ElementRef, Input , HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color :any

  constructor(private element : ElementRef) { 
    console.log("Yay!!!! We got the element !! Lets party" , this.element.nativeElement)
  }

  ngOnInit(){
  }


  @HostListener('mouseenter') dothis(){
     this.element.nativeElement.classList.add("zoom1")
  }

  @HostListener('mouseleave') dothat(){
    this.element.nativeElement.classList.remove("zoom1")
   
  }
}
