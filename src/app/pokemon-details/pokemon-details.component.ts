import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor() { }

  @Input('pokemon')
  PokemonDetails : Pokemon;

  ngOnInit(): void {
  }

  openDialog() {
    alert("a")
  }
}
