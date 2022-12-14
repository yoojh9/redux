import { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home(props) {
    console.log(props);

    const [text, setText] = useState("");

    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        props.addToDo(text);
        setText("")
    }

    return (
    <>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>Add</button>
        </form>
        <ul>
            {props.toDos.map(todo => 
                <ToDo key={todo.id} {...todo}/>
            )}
        </ul>
    </>
    )
}

// redux์์๋ store.getState();
function mapStateToProps(state) {
    return { toDos: state }
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(add(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);