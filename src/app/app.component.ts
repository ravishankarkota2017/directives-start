import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers:Number[] = [1, 2, 3, 4, 5];
  odds:Number[] = [1,3,5];
  evens:Number[]=[2,4];
  onlyOdd = false;
  age:number = null;
}
