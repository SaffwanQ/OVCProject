import React, { Fragment , useState } from 'react';
// import Card from './Card';
import Card from './Table';
import { Table, Button } from 'reactstrap'

const CardList = ({ robots, onRobotsPosts, posts }) => {

  return (
    <>
 
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
              <tr href="#" style={{cursor:"pointer"}} className="pe-auto" key={i} onClick={() => onRobotsPosts(robot.id)}>
                <td>{robot.name}</td>
                <td>{robot.email}</td>
                <td>{robot.address.city}</td>
                <td>{robot.company.name}</td>

              </tr>

              {/* {posts && posts.length > 0 && posts.map((post, i) => (
              <tr>
                <td>{robot.id}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td></tr>))} */}
              
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

          
      {posts && posts.length > 0 && (<Table size="lg" hover dark className="m-2 mt-4">
        <thead className="thead-dark">
          <tr >
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>

              {posts && posts.length > 0 && posts.map((post, i) => (
                <Fragment key={i}>
              <tr>
                <td>{post.title}</td>
                <td>{post.body}</td></tr>
              
            </Fragment>
          ))}
        </tbody>
      </Table>)}


    </>
  );
}

export default CardList;