import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color='red';
  }

}
