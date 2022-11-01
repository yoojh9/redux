import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({text, deleteTodo}) {

    return (
        <li>
            {text} <button onClick={deleteTodo}>DEL</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    // 이미 ownProps에 text나 id가 있기 때문에 parent component에서 props로 id 안넘겨줘도 됨.
    console.log(ownProps); // {"text":"","id": ""}
    return {
        deleteTodo: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);