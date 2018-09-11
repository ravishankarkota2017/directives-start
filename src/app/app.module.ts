import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { MoreBetterHighlightDirective } from './directives/more-better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    MoreBetterHighlightDirective,
    UnlessDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
