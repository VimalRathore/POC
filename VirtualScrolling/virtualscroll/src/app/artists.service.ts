import { Injectable } from '@angular/core';
import { artists } from './data';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { this.getArtists();
  }

  getArtists() {
    return artists;
    }
}
