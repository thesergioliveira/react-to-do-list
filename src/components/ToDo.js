const ToDos = (props) => {
    const userTodos = props.list.map((toDo, i) =>(
        <li key={i}>
            <input 
            type="checkbox" 
            defaultCheked={toDo.done} 
            onChange={() =>{
                props.remove(toDo.id);
            }}
            />
            {toDo.title}
            <i
            onClick={() => {
                props.remove(toDo.id)
            }}
            >
                🗑
            </i>
        </li>
    ));
    return <ul>{userTodos}</ul>
};

export default ToDos;