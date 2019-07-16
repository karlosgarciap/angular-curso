import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {};

  constructor(private activeRoutes: ActivatedRoute, private _spotifyService: SpotifyService, private router: Router) {
      this.activeRoutes.params.subscribe(params => {

        this._spotifyService.getArtistById(params.id).subscribe(
            response => this.artist = response
        );
      });
  }

  ngOnInit() {
  }

  verTopTracks(id) {
    this.router.navigate(['/artist/toptracks', id]);
  }
}
