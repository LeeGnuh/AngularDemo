import { Injectable } from '@angular/core';
import { Pokemon, PokemonType } from '../models/Pokemon';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemon'
const TYPE_API = 'http://localhost:3000/type'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getType() : Observable<PokemonType[]>{
    return this.http.get<PokemonType[]>(TYPE_API);
  }

  getPokemonByID(id : number){
    return this.http.get<Pokemon>(`${POKEMON_API}/${id}`)
  }

  getPokemon() : Observable<Pokemon[]> { 
    return this.http.get<Pokemon[]>(POKEMON_API);
  }
  
}