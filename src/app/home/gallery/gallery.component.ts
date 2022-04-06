import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

 // for img popup
  gallery = [
  'assets/images/gal_img1.jpeg', 
  'assets/images/gal_img2.jpeg', 
  'assets/images/gal_img3.jpeg', 
  'assets/images/gal_img4.jpeg',
  'assets/images/post_01.png', 
  'assets/images/post_02.png', 
  'assets/images/post_03.png'
  ];

  // for img popup
  showFlag: boolean = false;
  selectedImageIndex: number = -1;
  lightbox:any;
  albums:string;
  albumsArr:any = [];
  index: number;

  imageObject: Array<object> = [
    {
      image: 'assets/images/gal_img1.jpeg',
      alt: 'Newo', // Optional
      title: 'Newo' // Optional: Show image with description text 
    }, 
    {
      image: 'assets/images/gal_img2.jpeg', // Support base64 image
      title: 'PancakeSwap', //Optional: You can use this key if want to show image with title
      alt: 'PancakeSwap' //Optional: You can use this key if want to show image with alt
    },
    {
      image: 'assets/images/gal_img3.jpeg', // Support base64 image
      title: 'biswap', //Optional: You can use this key if want to show image with title
      alt: 'biswap' //Optional: You can use this key if want to show image with alt
    },
    {
      image: 'assets/images/gal_img4.jpeg', // Support base64 image
      title: 'XT.com', //Optional: You can use this key if want to show image with title
      alt: 'XT.com' //Optional: You can use this key if want to show image with alt
    },
    {
      image: 'assets/images/post_01.png', // Support base64 image
      title: 'Newo', //Optional: You can use this key if want to show image with title
      alt: 'Newo' //Optional: You can use this key if want to show image with alt
    },
    {
      image: 'assets/images/post_02.png', // Support base64 image
      title: 'Newo', //Optional: You can use this key if want to show image with title
      alt: 'Newo' //Optional: You can use this key if want to show image with alt
    },
    {
      image: 'assets/images/post_03.png', // Support base64 image
      title: 'Newo', //Optional: You can use this key if want to show image with title
      alt: 'Newo' //Optional: You can use this key if want to show image with alt
    }
  ];

  
  constructor() { }

  ngOnInit(): void { }

  showLightbox(index) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
      this.showFlag = false;
  }



}
