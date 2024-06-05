import Movie from "../domain/Movie";

test("Creating a Movie class", () => {
  const movie = new Movie(1005, "Мстители", 1000, "The Avengers", 2012, "США", "Avengers Asemble!", ["фантастика", "боевик", "фэнтези", "приключения"], "137 мин. / 02:17");
  const expected = {
    id: 1005,
    name: "Мстители", 
    price: 1000, 
    eng_name: "The Avengers", 
    year: 2012,
    country: "США", 
    slogan: "Avengers Asemble!", 
    genre: ["фантастика", "боевик", "фэнтези", "приключения"], 
    time: "137 мин. / 02:17",
  }
  expect(movie).toEqual(expected);
})