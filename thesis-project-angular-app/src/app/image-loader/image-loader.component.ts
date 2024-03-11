import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

import { Photo, PhotosWithTotalResults, createClient } from 'pexels';

@Component({
  selector: 'app-image-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-loader.component.html',
  styleUrl: './image-loader.component.css'
})
export class ImageLoaderComponent implements OnInit {
  public photoInfo : Photo[] = []

  @Input() loadAmount = 0;
  public amountOfPicturesLoaded = 0;

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    const client = createClient('8O3ITulBd3IwZW3T6EbbeILdffoBpma48W0ObpVqRfysfvyBTX0eveeL');
    const query = 'Dogs';

    client.photos.search({ query, per_page: this.loadAmount })
    .then(data => {
      const photos : PhotosWithTotalResults = data as PhotosWithTotalResults;
      this.photoInfo = photos.photos;
      this.amountOfPicturesLoaded = this.photoInfo.length;
    }).catch(ex => {
      if(ex.response) {
          const error = ex.response.status === 404 ? 'Page not found':'Something wrong has happened';
          console.log(error);     
      }
    })
  }
}

/*
{"page":1,"per_page":5,"photos":[
    {
        "id":3225517,"width":4664,"height":5830,
        "url":"https://www.pexels.com/photo/photo-of-stream-during-daytime-3225517/",
        "photographer":"Michael Block",
        "photographer_url":"https://www.pexels.com/@michael-block-1691617",
        "photographer_id":1691617,
        "avg_color":"#6D7B7C",
        "src":
        {
            "original":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
            "large2x":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940",
            "large":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940",
            "medium":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350",
            "small":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130",
            "portrait":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800",
            "landscape":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200",
            "tiny":"https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"
        },
        "liked":false,
        "alt":"Photo Of Stream During Daytime"
    },
  {"id":1547813,"width":3795,"height":5693,"url":"https://www.pexels.com/photo/red-trees-1547813/","photographer":"Artem Saranin","photographer_url":"https://www.pexels.com/@arts","photographer_id":359504,"avg_color":"#4B3536","src":{"original":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg","large2x":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false,"alt":"Red Trees"},{"id":15286,"width":2500,"height":1667,"url":"https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/","photographer":"Luis del Río","photographer_url":"https://www.pexels.com/@luisdelrio","photographer_id":1081,"avg_color":"#283419","src":{"original":"https://images.pexels.com/photos/15286/pexels-photo.jpg","large2x":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false,"alt":"Person Walking Between Green Forest Trees"},{"id":1366909,"width":2000,"height":3000,"url":"https://www.pexels.com/photo/low-angle-100  6913    0  6913    0     0  25748      0 --:--:-- --:--:-- --:--:-- 25794formation-1366909/","photographer":"eberhard grossgasteiger","photographer_url":"https://www.pexels.com/@eberhardgross","photographer_id":121938,"avg_color":"#897C75","src":{"original":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg","large2x":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false,"alt":"Low Angle Shot Of Rock Formation"},{"id":707344,"width":3648,"height":2432,"url":"https://www.pexels.com/photo/silhouette-of-mountain-hill-with-pine-trees-under-white-cloud-blue-sky-707344/","photographer":"eberhard grossgasteiger","photographer_url":"https://www.pexels.com/@eberhardgross","photographer_id":121938,"avg_color":"#766F6E","src":{"original":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg","large2x":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940","large":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940","medium":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350","small":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130","portrait":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800","landscape":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200","tiny":"https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280"},"liked":false,"alt":"Silhouette of Mountain Hill With Pine Trees Under White Cloud Blue Sky"}],"total_results":8000,"next_page":"https://api.pexels.com/v1/search/?page=2\u0026per_page=5\u0026query=nature"}
*/