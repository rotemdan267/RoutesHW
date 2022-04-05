import { Component, OnInit } from '@angular/core';
import { GetFromHttpService } from '../services/get-from-http.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  catsFacts: any = [];

  constructor(private fromHttp: GetFromHttpService) {
    fromHttp.getCatFacts().subscribe((catFacsts) => {
      this.catsFacts = catFacsts;
    })
  }

  ngOnInit(): void {
  }

}