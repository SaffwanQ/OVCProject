import React, { Fragment, useState } from 'react';
// import Card from './Card';
import Card from './Table';
import { Table, Collapse, Button, CardBody, Card } from 'reactstrap'

const CardListState = ({ robots, onRobotsPosts, posts }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>

            <div>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody>
                            Anim pariatur cliche reprehenderit,
                            enim eiusmod high life accusamus terry richardson ad squid. Nihil
                            anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident.
          </CardBody>
                    </Card>
                </Collapse>
            </div>

            <Table size="lg" hover dark className="m-2">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>

                    {robots.map((robot, i) => (
                        <Fragment key={i}>
                            <tr onClick={() => onRobotsPosts(robot.id)}>
                                <td>{robot.name}</td>
                                <td>{robot.email}</td>
                                <td>{robot.address.city}</td>
                                <td>{robot.company.name}</td>

                            </tr>

                            {posts && posts.length > 0 && posts.map((post, i) => (
                                <tr><td>{post.title}</td>
                                    <td>{post.body}</td></tr>))}

                        </Fragment>
                    ))}

                    {/* {posts.map((user, i) => (
            <Fragment key={i}>
              <tr>
                <td>{posts[i].title}</td>
                <td>{posts[i].body}</td>

              </tr>
            </Fragment>
          ))} */}
                </tbody>
            </Table>


        </>
    );
}

export default CardList;