import './App.css'

//This component will list tracks in a playlist as well as export to Spotify account
export default function Tracklist() {

    return (
        <div>
            <div>
                <ul>
                    <li>Tracks will list in</li>
                    <li>this componenet</li>
                </ul>
            </div>
            <div>
                <button>Save to Spotify</button>
            </div>
        </div>
    );
}