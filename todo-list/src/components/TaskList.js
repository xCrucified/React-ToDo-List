import React, { useState } from "react";
import TaskLine from "./TaskLine"
import { TASKS } from "../tasks";

export default function TaskList() {

    const [tasks, setTasks] = useState(TASKS);

    const handleDelete = (id) => {
        const index = tasks.findIndex(x => x.id === id);
        tasks.splice(index, 1);
        setTasks([...tasks]);
    }
    return (
        <>
            <div>
                {
                    tasks.map(i => <TaskLine key={i.id} task={i} onDelete={handleDelete} />)
                }
            </div>
        </>
    );
}