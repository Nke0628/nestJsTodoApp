import React from 'react'
import { todo } from '../../model/todo'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import '../../css/todo.css'

type Props = {
  todo : todo,
  deleteTodo : (id:number) => void,
  checkTodo : (id:number,checked:boolean) => void
}

const Component: React.FC<Props> = props => {
    return (
        <Row className="justify-content-between todo">
            <Col>
                <Form.Check 
                type="checkbox"
                defaultChecked={props.todo.checked}
                label= {props.todo.content}
                onChange={(e)=>props.checkTodo(props.todo.id,e.target.checked)}
                />
            </Col>
            <Col>
                <div className='delete-icon' onClick={()=>props.deleteTodo(props.todo.id)}>☓</div>
            </Col>
        </Row>
    );
}

export default Component