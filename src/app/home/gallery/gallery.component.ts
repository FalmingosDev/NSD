import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  lightbox:any;
  albums:string;
  albumsArr:any = [];
  index: number;
  constructor(lightbox: Lightbox) {
    this.lightbox = lightbox;
   }

  ngOnInit(): void {


  }

  open(index): void {
    // open lightbox 
    this.albumsArr = {src: 'assets/images/gal_img1.jpeg',
      caption: 'caption',
      thumb: 'assets/images/gal_img1.jpeg'
   };
    //this.albums = 'assets/images/gal_img1.jpeg';
    
    this.lightbox.open(this.albumsArr);
  }

}
