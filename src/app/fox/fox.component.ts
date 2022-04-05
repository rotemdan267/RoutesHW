import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetFromHttpService } from '../services/get-from-http.service';

@Component({
  selector: 'app-fox',
  templateUrl: './fox.component.html',
  styleUrls: ['./fox.component.css']
})
export class FoxComponent implements OnInit {

  foxPic: any = {};

  constructor(private fromHttp: GetFromHttpService, private client:HttpClient) {
    fromHttp.getRandomFox().subscribe((foxPicture) => {
      this.foxPic = foxPicture;
    });
  }

  ngOnInit(): void {
  }

  onClick() {

    let fromHttp2: GetFromHttpService = new GetFromHttpService(this.client);
    fromHttp2.getRandomFox().subscribe((foxPicture) => {
      this.foxPic = foxPicture;
    });
    }
}
