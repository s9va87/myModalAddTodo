import React,{useState} from "react";
import  {Col, Button, Modal, ModalFooter,ModalHeader,ModalBody,Input,Label} from 'reactstrap'

function ModalAddTodo(props){
    const [titleInputValue, setTitleInputValue] = useState('')
    const [statusSelectValue, setStatusSelectValue] = useState(false)

   const saveButtonHandler = () => {
        props.addTodo(titleInputValue,statusSelectValue)
       props.setIsModalOpen('')
   }

    return (
        <Col >

            {/*<Button onClick= {() => props.setIsModalOpen(true)}>  Add new</Button>*/}
            <Modal isOpen={props.isModalOpen}>
                <ModalHeader >Add new todo</ModalHeader>
                <ModalBody>
                    <Label>new title</Label>
                    <Input  value={titleInputValue}
                            onChange={(e) => setTitleInputValue(e.target.value)}
                            type="text"/>
                   <Label >New Status</Label>
                    <Input type="select"
                           name="select"
                           id='examplePlease'
                           value={statusSelectValue}
                           onChange={(e) => setStatusSelectValue(e.target.value)}>
                        <option value={true}>done</option>
                        <option value={false}>not done</option>
                    </Input>

                </ModalBody>

                <ModalFooter>
                    <Button onClick={saveButtonHandler}>Save</Button>
                    <Button onClick={()=> props.setIsModalOpen(false)}> Cancel</Button>
                </ModalFooter>

            </Modal>
        </Col>
    );
}
export  default  ModalAddTodo;