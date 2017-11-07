import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import { ImageService } from './shared/image.service';
import { ImageFilrerPipe } from './shared/filter.pipe';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent, 
    ImageFilrerPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ImageService, ImageFilrerPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
