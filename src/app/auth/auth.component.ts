import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  client_id: string = '9cda3dcc6eb24ceea4103e3d1b963fe6';
  client_secret: string = '53c51615a4054547b77d09e6baa54f89';
  redirect_uri: string = 'https://spotify-nowplaying.firebaseapp.com/callback';
  scope: string = 'user-read-currently-playing%20user-read-playback-state';

  authlink: string = 'https://accounts.spotify.com/authorize?client_id=' + this.client_id + '&redirect_uri=' + this.redirect_uri + '&scope=' + this.scope + '&response_type=token';

  constructor() { }

  ngOnInit() {
  }

}