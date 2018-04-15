import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ZingchartComponent } from './Components/zingchart/zingchart.component';



@NgModule({
  declarations: [
    AppComponent,
    ZingchartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ZingchartComponent]
})
export class AppModule { }
