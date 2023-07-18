import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonType } from '../models/Pokemon';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pokemon! : Pokemon;
  pokemonType! : PokemonType[];
  constructor(private pokemonService : PokemonService) { }
   
  toggleIsFav(object: any){
    console.log(object); 
  }

  onSelect(object :any){
    console.log(object);
  }

  onChoose(object :any){
    console.log(object);
    
  }

  handleSubmit(object : any){
    console.log(object);
    
  }

  ngOnInit() {
    this.pokemonService.getType().subscribe((data : PokemonType[])=>{
      this.pokemonType = data;
    console.log(this.pokemonType);
    
    })
    this.pokemonService.getPokemonByID(1).subscribe((data : Pokemon)=>{
      this.pokemon = data;         
    });
  }
}
