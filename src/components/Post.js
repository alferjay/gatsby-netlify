import React from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "gatsby"
import image from "../../static/gatsby.jpeg"
import innertext from "innertext"

function Post(props) {
  return (
    <article className="col-lg-6 col-xs-6">
      <div className="p-2">
        <Card>
          <Card.Img variant="top" src={image} alt={innertext(props.title)} />
          <Card.Body>
            <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
            <Card.Text>
              <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
            </Card.Text>
            <Button variant="warning" as={Link} to={props.readMore}>
              Read More...{" "}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </article>
  )
}

export default Post
