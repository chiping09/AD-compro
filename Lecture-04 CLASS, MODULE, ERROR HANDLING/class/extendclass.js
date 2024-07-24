class Media {
    constructor(info) {
        this.publishDate - info.publishDate
        this.Name = info.Name;
    }
}

class Song extends Media {
    constructor(SongData) {
        super(SongData);
        this.artist = SongData.artist;
    }
}

const mySong = new Song({
    artist: "Queen",
    Name: "Bohemian Rhapsody",
    publishDate: 1975
});

console.log(mySong);    