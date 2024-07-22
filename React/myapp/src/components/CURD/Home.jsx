import React from 'react'
import array from './array'
import { Button, Table } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  return (
    <div style={{ margin: "5rem" }}>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapping though every element 
                    in the array and showing the 
                    data in the form of table */}
                {array.map((item) => {
                    return (
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>

                            {/* getting theid,name, and 
                                age for storing these
                                value in the jsx with 
                                onclick event */}
                            <td>
                                {/* <Link to={/edit}>
                                    <Button
                                        
                                        
                                        variant="info"
                                    >
                                        Update
                                    </Button>
                                </Link> */}
                            </td>

                            {/* Using thr deleted function passing
                                the id of an entry */}
                            <td>
                                <Button
                                    
                                    variant="danger"
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>

        {/* Button for redirecting to create page for
            insertion of values */}
        
    </div>

    
);
}

export default Home