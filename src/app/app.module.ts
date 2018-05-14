import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DragulaModule } from 'ng2-dragula';
import { ExampleComponent } from './example/example.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserMenuComponent } from './user-menu/user-menu.component'
import { ClickOutsideModule } from 'ng-click-outside';
import { ProfPicComponent } from './prof-pic/prof-pic.component';
import { QuillComponent } from './quill/quill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ExampleComponent,
    SearchBarComponent,
    UserMenuComponent,
    ProfPicComponent,
    QuillComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    DragulaModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
