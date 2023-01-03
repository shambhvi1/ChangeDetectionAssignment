import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-p2c2',
  templateUrl: './p2c2.component.html',
  styleUrls: ['./p2c2.component.css']
})
export class P2c2Component implements DoCheck {
onclick() {

}
  ngDoCheck(){
    console.log("p2c2");
  }

}
