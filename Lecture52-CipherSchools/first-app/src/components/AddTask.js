import { useState } from "react"

const AddTask = ({ onSubmit, validator }) => {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const [showWrror, setShowError] = useState(false);

    let handleInputChange = (e) => {
        // console.log(e.target.value);

        setTask({
            ...task, [e.target.name]: e.target.value
        }

        )
    }

    let onFormSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        if (validator(task)) {

            onSubmit(task);
            setShowError(false);
        } else {
            setShowError(true);
        }
    }
    return (
        <>
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
            <br/>
           {showWrror && <div className="ui form error">
                    <div className="ui error message">
                        <div className="header">Error in form</div>
                        <p>Please enter valid fields</p>
                    </div>
                </div>}
        </>

    );
}
//1. we are using value in input to establish 2 way binding in recat, so it will help to store the current data in task object when onChange event is triggered

export default AddTask;