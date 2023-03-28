import { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { myPosts, clearErrors } from "../Action/postAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
// import http from "../lib/http";
// // utility function to format the creation date
// import formatDate from "../lib/formatDate";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.myPost);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(myPosts());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Container className="my-5" style={{ maxWidth: "800px" }}>
            <Image
              src="avatar.jpeg"
              width="150"
              style={{ borderRadius: "50%" }}
              className="d-block mx-auto img-fluid"
            />
            <h2 className="text-center">Welcome to the blog</h2>
          </Container>
          <Container style={{ maxWidth: "800px" }}>
            <ListGroup variant="flush" as="ol">
              {posts.map((post) => {
                return (
                  <ListGroup.Item key={post._id}>
                    <div className="fw-bold h3">
                      <Link
                        to={`/posts/${post._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        {post.title}
                      </Link>
                    </div>
                    <div>
                      {post.author} -{" "}
                      <span className="text-secondary">{post.createdAt}</span>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
