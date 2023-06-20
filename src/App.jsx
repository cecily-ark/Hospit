// import "./Ap.css";
import Dashboard from "./components/Dashboard";
import Doctor from "./components/doctor/Doctor";

function App() {
  return (
    <div className="App">
      <section className="for-sidebar"></section>
      <section className="for-dashboard">
        {/* <Dashboard head="Dashboard" /> */}
        <Doctor head="Doctor" />
      </section>
    </div>
  );
}

export default App;
