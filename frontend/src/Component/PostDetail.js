import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { getPostDetails, clearErrors, deletePost, removePost} from "../Action/postAction";
// import http from '../lib/http';
// import formatDate from '../lib/formatDate';
;

const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  const { post, loading, error } = useSelector((state) => state.postDetail);
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    dispatch(getPostDetails(id));
  }, [dispatch, error, id]);

  const postDelete = async () => {
    dispatch(deletePost(id))
    dispatch(removePost(id))
    history('/');
  }
  
  
  return (
    <>
      <Container className="my-5 text-justified" style={{ maxWidth: '800px' }}>
        <h1>{post.title}</h1>
        <div className="text-secondary mb-4">{post.createdAt}</div>
        {post.tags?.map((tag) => <span>{tag} </span>)}
        <div className="h4 mt-5">{post.content}</div>
        <div className="text-secondary mb-5">- {post.author}</div>
        <div className="mb-5">
          <Link
            variant="primary"
            className=" btn btn-primary m-2"
            to={`/posts/${id}/edit`}
          >
            Edit
          </Link>
          <Button variant="danger" onClick={postDelete}>Delete</Button>
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>&#8592; Back to Home</Link>
      </Container>
    </>
  );
};

export default Post;