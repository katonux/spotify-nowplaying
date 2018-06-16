import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetNowplayingService } from '../get-nowplaying.service'

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  param: any;

  title: string;
  artist: string;
  spotifyuri: string;

  tweeturi: string;
  genflag: boolean;

  constructor(
    private route: ActivatedRoute,
    private getNowPlayingService: GetNowplayingService
  ) { }

  ngOnInit() {
    this.getNowPlayingService.auth()
  }

  onclick() {
    this.getNowPlayingService.getNowPlaying()
      .then((response) => {
        this.param = response;
        this.tweeturi = 'https://twitter.com/intent/tweet?related=spotify,katonux&text=%23NowPlaying+'
          + this.param.item.name
          + '+by+' + this.param.item.album.artists[0].name
          + '%0a&url=' + this.param.item.external_urls.spotify;
        this.genflag = true;
      })

  }

}