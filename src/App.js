import "./App.css";
import Channels from "./channels";
import Sidebar from "./sidebar";
import TopNavigation from "./navigation";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Channels />
      <TopNavigation />
    </div>
  );
}

export default App;
