import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]', //square brackets indicate attribute directive
})
export class BasicHighlightDirective implements OnInit { 
  constructor(private ele:ElementRef) {
      
  }
  ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.ele.nativeElement.style.backgroundColor = 'burlywood';
  }
}
