import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppStartComponent } from './app-start.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';

import { ContactCreateComponent } from './contact/contact-create.component';
import { ContactListComponent  } from './contact-list/contact-list.component';

import { HeaderComponent  } from './header/header.component';
import { FooterComponent  } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "parent-child", component: HelloComponent},
  {path: "contact-create", component: ContactCreateComponent},
  {path: "contact-list", component: ContactListComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes), BrowserModule, FormsModule ],
  declarations: [ AppComponent,AppStartComponent,HomeComponent,
    HelloComponent,
    ChildComponent,
    ContactCreateComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent ],
  bootstrap:    [ AppStartComponent ],
  entryComponents: [HelloComponent]
})
export class AppModule { }