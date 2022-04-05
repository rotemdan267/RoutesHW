import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GetFromHttpService } from '../services/get-from-http.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogPic: any = {};

  constructor(private fromHttp: GetFromHttpService, private client:HttpClient) {
    fromHttp.getRandomDog().subscribe((dogPicture) => {

      this.dogPic = dogPicture;
    });
  }

  ngOnInit(): void {
  }

  onClick() {

    let fromHttp2: GetFromHttpService = new GetFromHttpService(this.client);
    fromHttp2.getRandomDog().subscribe((dogPicture) => {

      this.dogPic = dogPicture;
    });
    }

}
