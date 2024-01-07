// referenced from https://dokode.moe. Please let me know, Suni, if you want me to remove this!
var boombox = document.getElementById('player');

                        function playMusic() {
                            player.play();
                        }

                        function pauseMusic() {
                            player.pause();
                        }

                        function stopMusic() {
                            player.pause();
                            player.currentTime = 0;
                        }
const songs = {

    s1: {
        title: 'Kirby: Nightmare In Dreamland - Menu Theme',
        url: 'media/music/other/knidlmainmenu.mp3'
    },
    s2: {
        title: 'Kirbys Dream Land 3 - Cast Roll',
        url: '/media/audio/dl3_cast.mp3'
    },
    s3: {
        title: 'Kirbys Dream Land 3 - Grassland 2',
        url: '/media/audio/dl3_grassland2.mp3'
    },
    s4: {
        title: 'Kirbys Dream Land 3 - Grassland 4',
        url: '/media/audio/dl3_grassland_4.mp3'
    },
    s5: {
        title: 'Kurukuru Kururin - Cakeland',
        url: '/media/audio/kurukuru_cakeland.mp3'
    },
    s6: {
        title: 'MegaMan ZX - Green Grass Gradation',
        url: '/media/audio/megamanzx_greengrass.mp3'
    },
    s7: {
        title: 'MegaMan 8 - Astroman',
        url: '/media/audio/megaman8_astroman.mp3'
    },
    s8: {
        title: 'MegaMan 8 - Aquaman',
        url: '/media/audio/megaman8_aquaman.mp3'
    },
    s9: {
        title: 'Sonic The Hedgehog 3 - Endless Mine',
        url: '/media/audio/sonic3_endlessmine.mp3'
    },
    s10: {
        title: 'Pokemon Mystery Dungeon: Explorers of Sky - Craggy Coast',
        url: '/media/audio/craggy_coast.mp3'
    },
    s11: {
        title: 'Mario &amp; Luigi: Bowsers Inside Story - Grasslands, All The Way',
        url: '/media/audio/grasslands_alltheway_bowser.mp3'
    },
    s12: {
        title: 'Wario Ware Inc. Mega Microgames - Drifting Away',
        url: '/media/audio/driftingaway.mp3'
    },
    s13: {
        title: 'Kirby Super Star Ultra - Cushy Cloud',
        url: '/media/audio/superstar_cushycloud.mp3'
    }
};

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

let randomSong = getRandom(Object.values(songs));

console.log("now playing: " + ` ${randomSong.title}` + ` ${randomSong.url}`);

document.getElementById('titlescroll').innerHTML = `${randomSong.title}`;
document.getElementById('boombox').src = `${randomSong.url}`;
