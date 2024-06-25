import { useState } from "react"

const AddTask = ({ onSubmit }) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    let handleInputChange = (e) => {

        setTask({
            ...task, [e.target.name]: e.target.value
        }

        )
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        onSubmit(task);
    }
    return (
        <section className="screen">
            <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input name="title" type="text" spellCheck={false} data-ms-editor={true} placeholder="Task Title" onChange={handleInputChange} value={task.title} />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <textarea name="description" rows="2" spellCheck={false} data-ms-editor={true} placeholder="Task Description" onChange={handleInputChange} value={task.description} />
                    </div>
                    <button type="submit" className="ui primary button">
                        Save
                    </button>
                </form >
            </div >
        </section>


    );
}

export default AddTask;