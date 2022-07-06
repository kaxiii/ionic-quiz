import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

class Country {
  name: string;
  capital: string;
  is_dependency = false;
  
  constructor(name:string, capital:string) {
    this.name = name;
    this.capital = capital;
  }

}

export class GameService {

  constructor() { }

  vector() {
    let v: Country[];
    v[0] = new Country('Francia', 'Paris');
    v[1] = new Country('Alemania', 'Berlin');
    v[2] = new Country('Italia', 'Roma');
    v[3] = new Country('Portugal', 'Lisboa');
    return v;
  }
}
