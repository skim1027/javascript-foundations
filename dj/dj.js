function createSong(name, artist, fav = false, played = false) {
  var song = {
    name: name,
    artist: artist,
    favorite: fav,
    hasBeenPlayed: played
  }
  return song
}

function playSong(song){
  song.hasBeenPlayed = true
  return song
}

function makePlaylist(name, list) {
  var playlist = {
    name: name,
    songs: list
  }
  return playlist
}

function addSongToPlaylist(list, song) {
  list.songs.push(song)
  return list
}

function playSongs(list, favOnly) {
  for (var i = 0; i < list.songs.length; i++) {
    if (favOnly != undefined) {
      if (list.songs[i].favorite === true) {
        list.songs[i].hasBeenPlayed = true }
    } else {
      list.songs[i].hasBeenPlayed = true
    }
    
  }
  return list
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
