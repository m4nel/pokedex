import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  @Input('pokemon')
  pokemon : Pokemon;

  ngOnInit(): void {
  }

}
