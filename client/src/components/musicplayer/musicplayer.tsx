import React, {useState, useEffect} from 'react';

export function MusicPlayer() {

    const track = {
        name: "",
        album: {
            images: [
                { url: "" }
            ]
        },
        artists: [
            { name: "" }
        ]
    }

    const [player, setPlayer] = useState<any>(undefined);
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [current_track, setTrack] = useState(track);

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
    
        document.body.appendChild(script);

        (window as any).onSpotifyWebPlaybackSDKReady = () => {
    
            const player = new (window as any).Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: (cb:any) => { cb('BQBrnLHadOnLGLiwdBx00-ZfOQUBOG30k3YMiYdhY5gzmqakhRBtJpXquOF5cRRiBzI9sM0pqO-iGD-zP8ZEkgZomzYyZ6GdjgubKLqkmzUSCg4zLmnDHEwQSHAlx7P4Av-LPltyzf1RkTqQOhY-NKvI9IEsYFJuDvMESn1e-S5cW3AZ7vRxfoXzssM0VE5d'); },
                volume: 0.5
            });
    
            setPlayer(player);
    
            player.addListener('ready', (result: { device_id:any }) => {
                console.log('Ready with Device ID', result.device_id);
            });
    
            player.addListener('not_ready', (result: { device_id:any }) => {
                console.log('Device ID has gone offline', result.device_id);
            });

            player.addListener('player_state_changed', ( (state:any) => {

                if (!state) {
                    return;
                }
            
                setTrack(state.track_window.current_track);
                setPaused(state.paused);
            
            
                player.getCurrentState().then( (state:any) => { 
                    (!state)? setActive(false) : setActive(true) 
                });
            
            }));
    
    
            player.connect();
    
        };
    }, []);

    return(
        <div>
            
            <div className="container">
                <div className="main-wrapper">
                    <img 
                        src={current_track.album.images[0].url} 
                        className="now-playing__cover" alt="" />

                            <div className="now-playing__side">
                                <div className="now-playing__name">{
                                            current_track.name
                                            }</div>

                                <div className="now-playing__artist">{
                                            current_track.artists[0].name
                                            }</div>
                            </div>
                            
                    </div>
            </div>

            <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                &lt;&lt;
            </button>

            <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                {is_paused ? "PLAY" : "PAUSE" }
            </button>

            <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                &gt;&gt;
            </button>

        </div>
    )
}