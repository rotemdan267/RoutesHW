import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { Routes, RouterModule } from '@angular/router';
import { FoxComponent } from './fox/fox.component';
import {HttpClientModule} from '@angular/common/http'

const myWebRoutes: Routes = [
  { path: 'dogs', component: DogsComponent},
  { path: 'cats', component: CatsComponent},
  { path: 'fox', component: FoxComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    FoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(myWebRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
