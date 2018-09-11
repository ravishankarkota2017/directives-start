import { Directive, HostListener, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appMoreBetterHighlight]'
})
export class MoreBetterHighlightDirective implements OnInit{

  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'pink';

  @HostBinding('style.backgroundColor') bgColor:string = '';

  constructor() { 
  }

  ngOnInit(): void {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mousein(event: Event){
    this.bgColor = this.highlightColor;
  }
  
  @HostListener('mouseleave') mouseout(event: Event){
    this.bgColor = this.defaultColor;
  }
}
