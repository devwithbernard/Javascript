// Promise
class Singer{
    constructor(name) {
        this.name = name;
        this.songs = [];
    }

    addSong(song) {
        this.songs.push(song);
    }
}

class Fan{
    constructor(name) {
        this.name = name;
        this.listenedSongs = [];
    }

    addListenedSong(listenedSong) {
        this.listenedSongs.push(listenedSong);
    }

    notifyMe(availableSong) {
        this.message = availableSong;
    }
}

let promise = new Promise((resolve, reject) => {
    const singer = new Singer('Ed Sheeran');
    singer.songs = ['Shape of you', 'Photograph', 'Perfect'];

    if(singer.songs) {
        resolve(singer.songs)
    }else{
        reject('Song not available');
    }
})

let fan = new Fan('Bernard Konan');
promise.then(songs => {
    let numberOfAvailableSongs = songs.length;

    for (let i = 0; i < numberOfAvailableSongs; i++) {
        setTimeout(() => {
            fan.addListenedSong(songs[i]);
            console.log(fan.listenedSongs);
        }, 2000);
    }
}).catch(message => {
    fan.notifyMe(message);
    console.log(fan)
} )

// New use of promise
let index = 1;

let fetchPromise = new Promise((resolve, reject) => {


})

let intervalId = setInterval(() => {
    let index = 1;

    fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            index++;

            if(index === 10) {
                clearInterval(intervalId);
            }
        })
        .catch(error => {
            console.log(error);
            index++;
        });
}, 3000)
