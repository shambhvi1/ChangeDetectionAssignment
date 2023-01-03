import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-p1c2',
  templateUrl: './p1c2.component.html',
  styleUrls: ['./p1c2.component.css']
})
export class P1c2Component implements DoCheck {
onclick() {

}
  ngDoCheck(){
    console.log("p1c2");
  }

}
