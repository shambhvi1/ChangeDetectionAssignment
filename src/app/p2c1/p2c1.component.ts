import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-p2c1',
  templateUrl: './p2c1.component.html',
  styleUrls: ['./p2c1.component.css']
})
export class P2c1Component implements DoCheck {
onclick() {

}
  ngDoCheck(){
    console.log("p2c1");
  }

}
