import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';  
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

type Props = {
  addTodoItem : (param: string) => void
}

const Component: React.FC<Props> = props => {

    const [text,setText] = useState('')
    const handleClickAddBtn = () => {
      props.addTodoItem(text)
      setText('')
    }

    return (
      <Form>
        <Row>
          <Col xs="8" sm="10" className="pe-0">        
            <Form.Control
            type="text"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
          </Col>
          <Col xs="4" sm="2" className="ps-2 align-self-end">
            <Button variant="secondary" onClick={handleClickAddBtn} style={{width:"100%"}}>
              追加
            </Button>
          </Col>
        </Row>
      </Form>
    );
}

export default Component