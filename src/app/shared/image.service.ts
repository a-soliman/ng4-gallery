import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

  IMAGES: any[] = [
  	{
  		"id": 1,
  		"category": "boat",
  		"caption": "a view from a boat",
  		"url": "https://d1elspe5sgezyc.cloudfront.net/assets/v3/home/owners/power1-0ad9b4fec1eea01588b77f0948503152.jpg"
  	},
  	{
  		"id": 2,
  		"category": "boat",
  		"caption": "a view from a boat",
  		"url": "https://d1elspe5sgezyc.cloudfront.net/assets/v3/home/owners/power1-0ad9b4fec1eea01588b77f0948503152.jpg"
  	},
  	{
  		"id": 3,
  		"category": "boat",
  		"caption": "a view from a boat",
  		"url": "https://d1elspe5sgezyc.cloudfront.net/assets/v3/home/owners/power1-0ad9b4fec1eea01588b77f0948503152.jpg"
  	}
  ]

}
