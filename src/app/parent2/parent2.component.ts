import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements DoCheck {
onclick() {

}
  ngDoCheck(){
    console.log("parent 2");
  }

}
