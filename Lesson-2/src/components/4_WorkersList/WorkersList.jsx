import { useState } from "react";
import workersList from "./workersList";

function WorkersList() {
  return (
    <div>
      <p>
        4. Вивести список як маркований список з елементами у форматі (name:
        salary)
      </p>
      <ul>
        {workersList.map((worker) => (
          <li key={worker.id}>
            {worker.name} - {worker.salary} $
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkersList;
