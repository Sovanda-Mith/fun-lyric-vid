import "./App.css";
import ShowLyric from "./components/ShowLyric";
import bg from "./assets/bg.mp4";

function App() {
  return (
    <div>
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="w-screen h-screen object-fill"
      ></video>
      <ShowLyric />
    </div>
  );
}

export default App;
