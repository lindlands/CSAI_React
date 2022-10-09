import { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const workout = {
      title,
      load,
      reps
    };

    await fetch("https://csai-mern-22.herokuapp.com/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  return (
    <form className="WithBorder" onSubmit={handleSubmit}>
      <h2>Record your workout:</h2>
      <div className="WithBorder">
        <label>Exercise title: </label>
        <br />
        <label>▸</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
      </div>

      <div className="WithBorder">
        <label>Load: </label>
        <br />
        <label>▸</label>
        <input type="number" onChange={(e) => setLoad(e.target.value)}></input>
      </div>

      <div className="WithBorder">
        <label>Reps: </label>
        <br />
        <label>▸</label>
        <input type="number" onChange={(e) => setReps(e.target.value)}></input>
      </div>
      <button>Add workout</button>
    </form>
  );
}
