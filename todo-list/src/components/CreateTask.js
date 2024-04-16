import React from "react";
import { useForm } from "react-hook-form";

export default function CreateTask({ handleCreate }) {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onCreate = (task) => {
        console.log(task);
        task.deadline = new Date(task.deadline);
        handleCreate(task);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onCreate)}>
                <div className="form-container">
                    <h2>Create New User</h2>
                    <label>
                        <span>Title:</span>
                        <input {...register("title")} type="text" />
                    </label>
                    <div className="kit-kat">
                        <label>
                            <span>Status:</span>
                            <input {...register("status")} type="checkbox" />
                        </label>
                        <label>
                            <span>Priority</span>
                            <input {...register("priority")} type="number"></input>
                        </label>
                    </div>
                    <label>
                        <span>Deadline:</span>
                        <input {...register("deadline")} type="date" />
                    </label>
                    <div>
                        <button type="submit">Create</button>
                    </div>
                </div>
            </form>
        </>
    );
}
