import MusicAlbum from "../domain/MusicAlbum";

test("creating a MusicAlbum class", () => {
  const music = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
  const expected = {
    id: 1008,
    name: 'Meteora', 
    author: 'Linkin Park', 
    _price: 900, 
    count: 1
  }
  expect(music).toEqual(expected);
})