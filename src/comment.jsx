import React from 'react';
import Card from 'react-bootstrap/Card';

class Comment extends React.Component {
  render() {
    const {author, text, timestamp} = this.props;

    return (
      <div>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Card.Text>{timestamp}</Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Comment;