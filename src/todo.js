import './App.css';
import {useState} from "react";
import  {Button,Input,Label,Card, CardBody,CardTitle} from 'reactstrap'

const style = {
    'textDecoration': 'line-through'
}

function Todo(props) {
    const {todo = {}, isFirst, isLast} = props;
    const {done} = todo;

    const [inputValue, setInputValue] = useState(todo.title)
    const [isEditMode, setIsEditMode] = useState(false)

    const deleteButtonHandler = () => {
        props.deleteTodoItem(todo.id)
    }
    const isDone = done ? style : {}

    const updateButtonHandler = ()=> {

    }
    const saveButtonHandler = () => {
        props.editTodo(todo.id, inputValue)
        setInputValue(todo.title)
        setIsEditMode(false)
    }

    return (
        <Card >
            <CardBody >
                <CardTitle style={isDone}>
                    {todo.title}
                </CardTitle>
<input type='checkbox' checked={done} onChange={updateButtonHandler}/>
            <Button onClick={deleteButtonHandler}>delete</Button>
            <Button onClick={() => props.updateTodo(todo.id)}>upd</Button>
            <Button disabled={isFirst} onClick={() => props.moveUp(props.index, props.index - 1)}>↑</Button>
            <Button disabled={isLast} onClick={() => props.moveUp(props.index, props.index + 1)}>↓</Button>

            {!isEditMode && <button onClick={() => setIsEditMode(!isEditMode)}>edit</button>}

            {isEditMode &&
            <>
                <Label >new title:</Label>
                <Input type="text"

                       onChange={(e) => setInputValue(e.target.value)}
                       value={inputValue}/>
                <Button onClick={saveButtonHandler}>save</Button>
                <Button onClick={() => setIsEditMode(!isEditMode)}>cancel</Button>
            </>}

                </CardBody>
        </Card>
    );
}

export default Todo;