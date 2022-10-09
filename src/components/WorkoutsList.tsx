import { useEffect, useState } from "react";

export interface Workout {
  _id: string;
  title: string;
  reps: number;
  load: number;
}

export default function WorkoutsList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  async function fetchWorkouts() {
    var response = await fetch(
      "https://csai-mern-22.herokuapp.com/api/workouts"
    );

    var json = await response.json();

    if (response.ok) {
      setWorkouts(json);
    }
  }

  useEffect(() => {
    fetchWorkouts();
  });

  if (workouts.length > 0) {
    return (
      <div className="WithBorder">
        <h2>Your Workouts:</h2>

        {workouts.map((workout, i) => (
          <div className="WithBorder" key={i}>
            {workout.title}
            <br />
          </div>
        ))}
      </div>
    );
  } else {
    return <div>You have no workouts!</div>;
  }
}
