export interface Pokemon{
    idPK: number,
    namePK: string,
    typePK: string,
    favorite: boolean,
    inBag : boolean
  }
export interface PokemonType{
  key: number,
  value: string
}
export interface nameTable{
  id: number,
  name: string
}