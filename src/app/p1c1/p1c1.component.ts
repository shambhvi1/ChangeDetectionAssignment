import { Component, DoCheck, Input,ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-p1c1',
  templateUrl: './p1c1.component.html',
  styleUrls: ['./p1c1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class P1c1Component implements DoCheck {
  @Input() myStrArr: any[]=[];

  constructor(private cd: ChangeDetectorRef){}

  ngDoCheck(){
    console.log(this.myStrArr);
    this.cd.detectChanges();
    console.log("p1c1");
  }


  onclick() {
  this.myStrArr.push("shambhvi");
  }
 

}
