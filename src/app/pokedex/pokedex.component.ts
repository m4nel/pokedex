import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Pokemon } from '../models/Pokemon';
import { PokemonService } from './../service/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pokemons : Pokemon[] = [];
  inputSearch : string = '';
  pokemonsFiltrados : Pokemon[] = [];
  temPokemon : boolean = true;
  paginar : boolean = true;
  pageEvent: PageEvent;

  constructor(public pokemonService : PokemonService) {
    this.pokemons = pokemonService.pokemons;
  }

  ngOnInit(): void {}


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  TemPokemon() {
    this.ehPraPaginar();
    return this.temPokemon = this.pokemons.some( p => p.name.includes(this.inputSearch) || p.id.toString().includes(this.inputSearch));
  }

  ehPraPaginar() {
    this.pokemonsFiltrados = this.pokemons.filter(p => p.name.includes(this.inputSearch) || p.id.toString().includes(this.inputSearch));
    if(this.pokemonsFiltrados.length < 15) {
      this.paginar = false;
    }else {
      this.paginar = true;
    }
  }
}
