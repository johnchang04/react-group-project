import {Form, Button} from 'react-bootstrap';
import Comment from './comment';
import {useState, useEffect} from 'react'; 


const CommentSection = ({pageId}) => {
  const storageKey = `comments_${pageId}`;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: '', text: '', timestamp: ''}); 

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem(storageKey));
    if (storedComments) {
      setComments(storedComments);
    }
  }, [storageKey]);

  const saveCommentsToLocalStorage = (comments) => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  };


  const handleCommentSubmit = () => {
    if (newComment.author && newComment.text) {
      const updatedComments = [
        ...comments,
        { ...newComment, timestamp: new Date().toLocaleString() },
      ];
      setComments(updatedComments);
      saveCommentsToLocalStorage(updatedComments);
      setNewComment({ author: '', text: '' });
    }
  };

  return (
    <div>
      <br/><br/> 
      <h2>Comments</h2>
      <br/>

      <div className="comment-list">
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>

      <br/>
      <Form>
        <Form.Group controlId="author">
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="text">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Add your comment here"
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
          />
        </Form.Group>
        <br/>
        <Button variant="primary" onClick={handleCommentSubmit}>
          Add Comment
        </Button>
      </Form>
      <br/>
    </div>
  );
}

export default CommentSection;
