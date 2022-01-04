import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeCvComponent } from './liste-cv/liste-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { StyleComponent } from './directive/style/style.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { FormsModule } from '@angular/forms';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header/header.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteCvComponentComponent } from './delete-cv-component/delete-cv-component.component';
import { DeleteCvComponent } from './delete-cv/delete-cv.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    DetailComponent,
    DeleteCvComponentComponent,
    DeleteCvComponent,
    AddCvComponent,
    ErrorComponentComponent,
    ErrorComponent,
    LoginComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
