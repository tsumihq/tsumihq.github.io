// referenced from https://dokode.moe. Please let me know, Suni, if you wish for me to remove this!
var player = document.getElementById('player');

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
