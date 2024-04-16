import React, { useState } from "react";

export default function TaskLine({ task, onDelete }) {

    const [backgroundSet] = useState(getColor);
    const [throughLineSet] = useState(getThroughLine);
    const [checkSet, updateCheckSet] = useState(getChecked());
    const [exclMarkSet] = useState(getExclMark);

    function getExclMark() {
        if (task.priority === 2) return '! ' + task.title;
        else return task.title
    }
    function getChecked() {
        if (task.priority <= 1) return true;
    }
    function getColor() {
        if (task.priority >= 3) return "rgb(157, 194, 207)";
        if (task.priority == 2) return "rgb(165, 204, 217)";
        if (task.priority <= 1) return "rgb(227, 227, 227)";
        else return "";
    };
    function getThroughLine() {
        if (task.priority <= 1) return "line-through";
        else return task.title
    };
    return (
        <span className="container card-line" style={{ 'backgroundColor': backgroundSet }}>
            <span className="container-second">
                <input type="checkbox" onChange={() => updateCheckSet(!checkSet)} checked={checkSet} />
                <p style={{ 'text-decoration': throughLineSet }}>{exclMarkSet}</p>
                <span className="date-setting">
                    <p>{task.deadline?.toDateString()}</p>
                </span>
            </span>

            <span className="button-delete">
                <button type="button" onClick={() => onDelete(task.id)}>delete</button>
            </span>
        </span>
    );
}