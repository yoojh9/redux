import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({toDos}) {
    const {id} = useParams();
    console.log(id);

    const detail = toDos.find(todo => todo.id === parseInt(id));
    console.log(detail);

    return (
        <>
            <h1>{detail?.text}</h1>
            <h5>Create at: {detail?.id}</h5>
        </>
    )
}

function mapStateToProps(state) {
    return {toDos: state}
}

export default connect(mapStateToProps)(Detail);