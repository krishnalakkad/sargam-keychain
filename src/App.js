import './App.css';
import video from './video/video.mp4'

function App() {
  return (
    <div className="main">
      <div className="row m-0 video">
        <div className="col-xl-6 col-xs-12">
          <video src={video} controls autoPlay={false}></video>
        </div>
        <div className="col-xl-6 col-xs-12">
          <h1>Forever Mine💖</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
