import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon, PokemonType, nameTable } from '../models/Pokemon';
import { NameTBService } from '../services/nameTB.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  pokemon! : Pokemon;
  pokemonType! : PokemonType[];
  name!:nameTable[];
  constructor(private pokemonService : PokemonService, private nameTBS : NameTBService) { }
   
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
    this.nameTBS.getAll().subscribe((data : nameTable[])=>{
      this.name = data;
      console.log(this.name);
    })

    this.pokemonService.getType().subscribe((data : PokemonType[])=>{
      this.pokemonType = data;
      console.log(this.pokemonType);
    })
    
    this.pokemonService.getPokemonByID(1).subscribe((data : Pokemon)=>{
      this.pokemon = data;         
    });
  }
}
