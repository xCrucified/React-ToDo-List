import React, { useState } from "react";
import TaskLine from "./TaskLine"
import { TASKS } from "../tasks";
import CreateTask from "./CreateTask";

export default function TaskList() {

    const [tasks, setTasks] = useState(TASKS);

    const handleDelete = (id) => {
        const index = tasks.findIndex(x => x.id === id);
        tasks.splice(index, 1);
        setTasks([...tasks]);
    };
    const handleCreate = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <>
            <div className="panel">
                <div>
                    <CreateTask handleCreate={handleCreate} />
                </div>
                <div className="main-container">
                    {
                        tasks.map(i => <TaskLine key={i.id} task={i} onDelete={handleDelete} />)
                    }
                </div>
            </div>
        </>
    );
}