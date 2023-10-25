import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup } from 'react-bootstrap';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Comment Section</h2>
          <Form>
            <Form.Group>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={handleCommentChange}
                />
                <InputGroup.Append>
                  <Button variant="primary" onClick={addComment}>Post</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>
          </Form>
          <ListGroup>
            {comments.map((comment, index) => (
              <ListGroup.Item key={index}>{comment}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default CommentSection;
