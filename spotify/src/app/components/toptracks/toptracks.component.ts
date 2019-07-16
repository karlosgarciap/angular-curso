import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-toptracks',
  templateUrl: './toptracks.component.html',
  styleUrls: ['./toptracks.component.css']
})
export class ToptracksComponent implements OnInit {

  topTracks: any = [];
  constructor(private activeRoutes: ActivatedRoute, private _spotifyService: SpotifyService, private router: Router) {
    this.activeRoutes.params.subscribe(params => {

      this._spotifyService.getTopTracksByArtistId(params.id).subscribe(
          response => this.topTracks = response
      );
    });
  }

  ngOnInit() {
  }

}
