import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import TopPlaylist from './components/top_playlist/top_playlist';
import Playlist from './components/playlist/playlist';

function App() {
  return (
    <div style={{ backgroundColor: '#191414' }}>
      <Navbar />
      <Hero />
      <TopPlaylist/>
      <Playlist/>
      {/* Your app content goes here */}
    </div>
  );
}

export default App;
