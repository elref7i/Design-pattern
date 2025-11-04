class GetMusic {
  get resource() {
    return [
      { id: 1, title: "Music 1" },
      { id: 2, title: "Music 2" },
      { id: 3, title: "Music 3" },
    ];
  }
  fetch(id) {
    return this.resource.find((ele) => ele.id === id);
  }
}

// const getMusic = new GetMusic();

class GetMovie {
  constructor(id) {
    return this.resource.find((ele) => ele.id === id);
  }

  get resource() {
    return [
      { id: 1, title: "Movie 1" },
      { id: 2, title: "Movie 2" },
      { id: 3, title: "Movie 3" },
    ];
  }
}

// const getMovie = new GetMovie(1);

// console.log(getMovie);

const getShow = (id) => {
  const resource = [
    { id: 1, title: "Show 1" },
    { id: 2, title: "Show 2" },
    { id: 3, title: "Show 3" },
  ];

  return resource.find((ele) => ele.id === id);
};

const books = [
  { id: 1, title: "Book 1" },
  { id: 2, title: "Book 2" },
  { id: 3, title: "Book 3" },
];

class RefaiFacade {
  constructor(type) {
    this.type = type;
  }

  getPattern(id) {
    switch (this.type) {
      case "Musics":
        return this._getMusics(id);
      case "Movies":
        return this._getMovies(id);
      case "Show":
        return this._getShow(id);
      case "books":
        return this._getBook(id);
      default:
        return null;
    }
  }

  _getMusics(id) {
    const m = new GetMusic();
    return m.fetch(id);
  }
  _getMovies(id) {
    return new GetMovie(id);
  }

  _getShow(id) {
    return getShow(id);
  }
  _getBook(id) {
    return books.find((ele) => ele.id === id);
  }
}

const ahmed = new RefaiFacade("books");

// ahmed.get(1);

console.log(ahmed.getPattern(1));
