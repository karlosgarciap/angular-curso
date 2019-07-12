import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  albums: any = {};

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  search(str: string) {
    this.spotify.search(str).subscribe(
        (data: any) => (this.albums = data.albums.items)
    );
  }
}
