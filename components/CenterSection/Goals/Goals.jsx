import React from "react";

const Goals = () => {
  // Mock data for goals
  const goals = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a portfolio website", completed: true },
    { id: 3, title: "Master JavaScript", completed: false },
    { id: 4, title: "Explore CSS animations", completed: false },
  ];

  return (
    <div>
      <h2>Goals</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <input type="checkbox" checked={goal.completed} readOnly />
            <label
              style={{
                textDecoration: goal.completed ? "line-through" : "none",
              }}
            >
              {goal.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Goals;
