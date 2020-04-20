import { Component, Input } from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',  
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {
  @Input() name: string;
  count: number = 1;
  childname: string = "Child";
  isDisplay = false;
  
  // constructor(strname: string){
  //    this.name = strname;
  //  }

  ngOnInit(){
    this.childname = "Child "+ this.count;
  }

  toggleVisibility(e){
    this.isDisplay= e.target.checked;    
  }
}
