import { formatDate } from "../utils/DateUtils";

// const Task = (props) => {
    // console.log(props);
const Task = ({task: {title, description, createdDate}}) => {

    return (
        <div className="card">
            <div className="content">
                <div className="header">
                    {/* Go to gym */}
                    {title}
                </div>
                <div className="meta">
                    {/* Created date */}
                    {/* {createdDate.toLocaleTimeString()} */}
                    {formatDate(createdDate)}
                </div>
                <div className="description">
                    {/* Going to gym is good for muscle growth */}
                    {description}
                </div>
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Edit</div>
                    <div className="ui basic red button">Delete</div>
                </div>
            </div>
        </div>
    );
}

export default Task;