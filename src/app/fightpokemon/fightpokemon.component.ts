import { Pokemon } from './../models/Pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';

@Component({
  selector: 'app-fightpokemon',
  templateUrl: './fightpokemon.component.html',
  styleUrls: ['./fightpokemon.component.css']
})
export class FightpokemonComponent implements OnInit {

  constructor(pokeService: PokemonService) {
    this.pokemons = pokeService.pokemons;
   }

  pokemons : Pokemon[] = [];
  inputSearch : string = '';
  pokemonInput1: Pokemon;
  pokemonInput1Total: number;
  pokemonInput2: Pokemon;
  pokemonInput2Total: number;
  background: { 'background-color': string };
  background2: { 'background-color': string };
  texto1: string = "";
  texto2: string = "";

  ngOnInit(): void {
  }

  selecionaPokemon(pokemon : Pokemon, diff : number) {
    if(diff == 1) {
      this.background = { 'background-color': 'white' };
      this.pokemonInput1Total = 0;
      this.texto1 = "";
      this.pokemonInput1 = pokemon;
      this.pokemonInput1.stats.forEach(s => this.pokemonInput1Total += s.base_stat);
      return this.pokemonInput1;
    }

    else{
      this.background2 = { 'background-color': 'white' };
      this.pokemonInput2Total = 0;
      this.texto2 = "";
      this.pokemonInput2 = pokemon;
      this.pokemonInput2.stats.forEach(s => this.pokemonInput2Total += s.base_stat);
      return this.pokemonInput2;
    }
  }

  fight() {
    if(!this.pokemonInput1 || !this.pokemonInput2) {
      alert("jassou")
      //
    }
    if(this.pokemonInput1Total > this.pokemonInput2Total) {
      this.texto1 = "Foi o Vencedor";
      this.texto2 = "Perdeu";
      this.background = { 'background-color': '#99FF99' };
      this.background2 = { 'background-color': '#FFCCCC' };
    }
    if(this.pokemonInput1Total < this.pokemonInput2Total ){
      this.texto2 = "Foi o Vencedor";
      this.texto1 = "Perdeu";
      this.background2 = { 'background-color': '#99FF99' };
      this.background = { 'background-color': '#FFCCCC' };
    }
    if(this.pokemonInput1Total == this.pokemonInput2Total){
      this.texto1 = "Empatou";
      this.texto2 = "Empatou";
      this.background2 = { 'background-color': 'grey' };
      this.background = { 'background-color': 'grey' };
    }
  }
}

