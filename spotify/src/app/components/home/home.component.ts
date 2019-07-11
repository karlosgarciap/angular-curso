import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home-spotify',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  albums: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe(
        (data: any) => (this.albums = data.albums.items)

    );
  }

  ngOnInit() {
  }

}
