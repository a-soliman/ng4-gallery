import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  
  visableImages =[];

  getImages() {
    return this.visableImages = IMAGES.slice(0);
  };

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  };


}

const IMAGES: any[] = [
    {
      "id": 1,
      "category": "boats",
      "caption": "a view from a boat",
      "url": "https://d1elspe5sgezyc.cloudfront.net/assets/v3/home/owners/power1-0ad9b4fec1eea01588b77f0948503152.jpg"
    },
    {
      "id": 2,
      "category": "boats",
      "caption": "a view from a boat",
      "url": "http://content.basspro.com/sitelets/boats-atvs/images/brand-tahoe.jpg"
    },
    {
      "id": 3,
      "category": "boats",
      "caption": "a view from a boat",
      "url": "https://www.envirofloorcare.com/images/boat.jpg"
    },
    {
      "id": 4,
      "category": "babies",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex, debitis iste ab atque asperiores omnis dolorem consequuntur accusamus veritatis ipsam sunt assumenda labore vitae, ipsum perspiciatis dolores laboriosam, non.",
      "url": "https://i.ytimg.com/vi/DSnbZUjIyAc/maxresdefault.jpg"
    },
    {
      "id": 5,
      "category": "babies",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex, debitis iste ab atque asperiores omnis dolorem consequuntur accusamus veritatis ipsam sunt assumenda labore vitae, ipsum perspiciatis dolores laboriosam, non.",
      "url": "http://www.parents.com/sites/parents.com/files/styles/width_300/public/images/p_101395269.jpg"
    },
    {
      "id": 6,
      "category": "babies",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex, debitis iste ab atque asperiores omnis dolorem consequuntur accusamus veritatis ipsam sunt assumenda labore vitae, ipsum perspiciatis dolores laboriosam, non.",
      "url": "http://ww1.hdnux.com/photos/53/14/16/11322252/5/920x920.jpg"
    },
    {
      "id": 7,
      "category": "pets",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex, debitis iste ab atque asperiores omnis dolorem consequuntur accusamus veritatis ipsam sunt assumenda labore vitae, ipsum perspiciatis dolores laboriosam, non.",
      "url": "http://guyanachronicle.com/wp-content/uploads/2016/06/pets.jpg"
    },
    {
      "id": 8,
      "category": "pets",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex, debitis iste ab atque asperiores omnis dolorem consequuntur accusamus veritatis ipsam sunt assumenda labore vitae, ipsum perspiciatis dolores laboriosam, non.",
      "url": "http://www.petmd.com/sites/default/files/classroom-pets3.jpg"
    },
    {
      "id": 9,
      "category": "pets",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ex, debitis iste ab atque asperiores omnis dolorem consequuntur accusamus veritatis ipsam sunt assumenda labore vitae, ipsum perspiciatis dolores laboriosam, non.",
      "url": "http://images.parents.mdpcdn.com/sites/parents.com/files/images/550_101032377.jpg"
    },
  ]