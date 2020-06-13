import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"

function Post(props) {
  return (
    <div className="p-3">
      <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          <Button variant="primary" as={Link} to={props.readMore}>
            Read More...{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Post
