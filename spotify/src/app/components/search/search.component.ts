import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any = {};


  constructor(private spotify: SpotifyService, private activeRoutes: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  search(str: string) {
    this.spotify.search(str).subscribe(
        (data: any) => (this.artists = data)
    );
  }

  verArtista(id) {
    this.router.navigate(['/artist', id]);
  }
}
