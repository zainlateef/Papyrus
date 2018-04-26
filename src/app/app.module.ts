import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DragulaModule } from 'ng2-dragula';
import { ExampleComponent } from './example/example.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
