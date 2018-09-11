import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isDropdownOpened:boolean = false;
  constructor() { }
  
  @HostListener('click') dropDownClicked(){
    this.isDropdownOpened = ! this.isDropdownOpened;
  }
}
