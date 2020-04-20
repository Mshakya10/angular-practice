import { Component,
ViewChild,
ViewContainerRef,
ComponentFactoryResolver } from '@angular/core';
import {ChildComponent} from './child/child.component'
import {HelloComponent} from './hello.component'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],

})
export class AppComponent  {
  name = 'Parent1';
  count: number = 1;
 
 title = 'app';
    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

  onCreate(message)
  {   
    //alert('Created Component' + this.count++);
    //this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(HelloComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.count = ++this.count;
    componentRef.instance.name = 'Parent'+ componentRef.instance.count;
  }
}
