import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Pokemon } from '../models/Pokemon';
import { PokemonService } from './../service/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageSize = 9;
  paginar : boolean = true;
  currentPage: number = 1;
  inputSearch : string = '';
  pokemons : Pokemon[] = [];
  pokemonsFiltrados : Pokemon[] = [];
  temPokemon : boolean = true;

  constructor(public pokemonService : PokemonService) {
    this.pokemons = pokemonService.pokemons;
    this.pokemonsFiltrados = this.pokemons;
  }

  ngOnInit(): void {

  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
  }


  TemPokemon() {
    this.temPokemon = this.pokemons.some( p => p.name.includes(this.inputSearch) || p.id.toString().includes(this.inputSearch));
    this.ehPraPaginar();

    if(this.ehPraPaginar() && this.paginator != undefined) {
      this.currentPage = 1;
      this.paginator.pageIndex = 0;
    }

    return this.temPokemon;
  }

  ehPraPaginar() {
    this.pokemonsFiltrados = this.pokemons.filter(p => p.name.includes(this.inputSearch) || p.id.toString().includes(this.inputSearch));
    if(this.pokemonsFiltrados.length <= 9) {
      return this.paginar = false;
    }else {
      return this.paginar = true;
    }
  }
}
