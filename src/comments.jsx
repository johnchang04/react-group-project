import {Form, InputGroup, Container, Row, Col, ListGroup, Button} from 'react-bootstrap';
import {useState} from 'react'; 


function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(''); 


  const handleCommentChange = (event) => {
    setNewComment(event.target.value); // sets newComment to event's value
  }; 

  const addComment = () => {
    if (newComment.trim() !== '') {  // if newComment is not empty
      setComments([...comments, newComment]); // setComments appends newComment to comments list
      setNewComment(''); // reset newComment to empty
    }
  };

  return (
    <Container>
          <h2>Comment Section</h2>
          <Form>
            <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Add a comment"
                  value={newComment}
                  onChange={handleCommentChange}
                />
            </Form.Group>
                <Button variant="primary" onClick={addComment}>Post</Button>
            
          </Form>
          <ListGroup>
            {comments.map((comment, index) => (
              <ListGroup.Item key={index}>{comment}</ListGroup.Item>
            ))}
          </ListGroup>
    </Container>
  );
}

export default CommentSection;
