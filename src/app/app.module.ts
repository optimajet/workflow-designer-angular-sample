import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WorkflowDesignerModule } from '@optimajet/workflow-designer-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorkflowDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }