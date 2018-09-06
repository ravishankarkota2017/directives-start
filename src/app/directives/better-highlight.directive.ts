import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private eleRef: ElementRef, private rend: Renderer2) {}

  @HostListener('mouseenter') mou_enter(eventdata: Event){
    this.rend.addClass(this.eleRef.nativeElement,'lightBG')
   // this.rend.setStyle(this.eleRef.nativeElement,'background-color','pink');
  }

  @HostListener('mouseleave') mou_leave(eventdata: Event){
    //this.rend.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.rend.removeClass(this.eleRef.nativeElement,'lightBG')
  }

  ngOnInit(): void {
      
  }
}
