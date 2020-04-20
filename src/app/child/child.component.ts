import {Component,Input} from '@angular/core'

@Component({
selector: 'hello-child',
template: `<p [hidden]='!disabled'>Child name - "{{name| uppercase}}"</p>`,
styles:[`p {font-family: Gadugi;
font-size:25px;
background-color:cyan;
font-weight:bold;
margin: 5px;
}`]
})
export class ChildComponent{
  @Input() name: string = 'default';
  @Input() disabled : boolean = false;
  constructor(){   
    console.log('child component constructor called '+this.name);
  }
  ngOnInit(){
     console.log('child component ngOnInit called');
  }  

  ngOnChanges(){
     console.log('child component ngOnChanges called');
  }  
}