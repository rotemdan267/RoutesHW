import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetFromHttpService {

  constructor(private client: HttpClient) { }

  getRandomDog() {
    return this.client.get('https://dog.ceo/api/breeds/image/random');
  }

  getCatFacts() {
    return this.client.get('https://cat-fact.herokuapp.com/facts');
  }

  getRandomFox() {
    return this.client.get('https://randomfox.ca/floof/?ref=apilist.fun');
  }
}
