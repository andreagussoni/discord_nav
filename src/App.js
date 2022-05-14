import "./App.css";
import Channels from "./channels";
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Channels />
    </div>
  );
}

export default App;
