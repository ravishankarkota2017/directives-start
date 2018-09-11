import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      this.vR.createEmbeddedView(this.tR);
    } else {
      this.vR.clear();
    }
  }
  constructor(private tR: TemplateRef<any>, private vR: ViewContainerRef) {
    console.log(this.tR);
    console.log(this.vR);
  }
}
