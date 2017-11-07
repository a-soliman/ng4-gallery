import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

	title = 'Recent Photos!';
	visableImages: any[] = []; 

  constructor(private imageService: ImageService) {
  	 this.visableImages = this.imageService.getImages();
  }

  ngOnInit() {
    console.log(this.visableImages);
  }

  ngOnChanges() {}

}
