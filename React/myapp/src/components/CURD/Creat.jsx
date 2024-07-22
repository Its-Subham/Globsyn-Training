import React from 'react'
import {Table,Form,Button} from "react-bootstrap"
import array from './array'

const Creat = () => {
  return (
    <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicName"
                >
                    <Form.Control
                        onChange={(e) =>
                            setname(e.target.value)
                        }
                        type="text"
                        placeholder="Enter Name"
                        required
                    />
                </Form.Group>
 
                {/* Fetching a value from input textfirld in
                    a setage using usestate*/}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge"
                >
                    <Form.Control
                        onChange={(e) =>
                            setage(e.target.value)
                        }
                        type="number"
                        placeholder="Age"
                        required
                    />
                </Form.Group>
 
                {/* handing a onclick event in button for
                    firing a function */}
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
 
                {/* Redirecting back to home page 
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>*/}
            </Form>
        </div>
  )
}

export default Creat