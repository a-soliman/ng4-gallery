import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, OnChanges {

	title = 'Recent Photos!';
	@Input() filterBy?: string = 'all';

  visableImages: any[] = []; 

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    console.log(this.visableImages);
    this.visableImages = this.imageService.getImages();
  }

  ngOnChanges() {
    this.visableImages = this.imageService.getImages();
  }

}
