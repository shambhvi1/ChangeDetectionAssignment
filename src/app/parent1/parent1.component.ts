import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements DoCheck {
strArrayInParent: any[] =[];
onclick() {
  this.strArrayInParent.push("Sharma")
}
  ngDoCheck(){
    console.log("parent 1");
  } 

}
