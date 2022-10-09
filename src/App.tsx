import "./styles.css";

import AppBar from "./components/AppBar";
import WorkoutsList from "./components/WorkoutsList";
import WorkoutForm from "./components/WorkoutForm";

export default function Car() {
  return (
    <div className="AppDiv">
      <AppBar />
      <WorkoutsList />
      <WorkoutForm />
      <p>More info coming soon!</p>
    </div>
  );
}
