import { useState} from "react";

const List = (props) => {
    const [userInput, setUserInput] = useState("");
    console.log(userInput); 
    function handleChange(e) {
        setUserInput(e.target.value);
        
    }
    console.log(userInput);
    function handleSubmit (e) {
        e.preventDefault();
    if (userInput.length){
        props.setList((prevState) => [
            ...prevState,
            {id: prevState.length, title: userInput.trim(), done: false},
        ]);
        setUserInput("");
    }
} 
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange}/>
            <input type="submit" value="Add"/>
        </form>
    );  
};

export default List;