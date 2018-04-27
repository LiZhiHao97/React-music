let localStorage = {
    setCurrentSong (song) {
        window.localStorage.setItem('song', JSON.stringify(song))
    },

    getCurrentSong () {
        let song = window.localStorage.getItem('song')
        return song ? JSON.parse(song) : {}
    },

    setSongs (songs) {
        window.localStorage.setItem('songs', JSON.stringify(songs))
    },

    getSongs () {
        let songs = window.localStorage.getItem('songs')
        return songs ? JSON.parse(songs) : []
    },

    setSkin(key) {
        window.localStorage.setItem("skin", key);
    },
    getSkin() {
        let skin = window.localStorage.getItem("skin");
        return !skin ? "netBaseRed" : skin;
    }
}

export default localStorage