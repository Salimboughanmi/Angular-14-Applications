import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { DirectComponent } from './direct/direct.component';
import { ManageServerComponent } from './manage-server/manage-server.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ShortPipe } from './short.pipe';
import { FiltrePipe } from './filtre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    MsWordComponent,
    DirectComponent,
    ManageServerComponent,
    CustomDirectiveDirective,
    ShortPipe,
    FiltrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
