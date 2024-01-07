const songs = {

    s1: {
        title: 'Kirby: Nightmare In Dreamland - Menu Theme',
        url: '/media/music/other/knidlmainmenu.mp3'
    },
    s2: {
        title: 'Pokemon FireRed & LeafGreen - Pallet Town',
        url: '/media/music.other/pkmfrlgpallettown.mp3'
    },
    s3: {
        title: 'Kirbys Dream Land 3 - Grassland 2',
        url: '/media/audio/dl3_grassland2.mp3'
    },
    s4: {
        title: 'Kirbys Dream Land 3 - Grassland 4',
        url: '/media/audio/dl3_grassland_4.mp3'
    },
};

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

let randomSong = getRandom(Object.values(songs));

console.log("now playing: " + ` ${randomSong.title}` + ` ${randomSong.url}`);

document.getElementById('titlescroll').innerHTML = `${randomSong.title}`;
document.getElementById('player').src = `${randomSong.url}`;
