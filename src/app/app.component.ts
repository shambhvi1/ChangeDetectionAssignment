import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  
  counter =2;
  increase(){
    this.counter++;
  }
  ngDoCheck(){
    console.log("angular is checking for changes");
  }
  decrease(){
    setInterval(() =>
    {
      this.counter--;
  },1000);
  }
  onclick() {
    
    }
}
