import { Component, OnInit } from '@angular/core';
import { ImageService} from '../shared/image.service';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
	
	title = 'Image Detail...';

  	constructor(private imageService: ImageService) { }

  	ngOnInit() {
  	}

}
