export interface Pokemon {
  id: number,
  name: string,
  url: string,
  height: number,
  weight: number,
  stats: Stats[],
  types: Types[],
  sprites: Sprites
}

interface Stats {
  base_stat: number,
  stat: {name : string}
}

interface Types {
  type: {name : string}
}
interface Sprites {
  other: Other
}

interface Other {
  dream_world: {front_default: string}
}
