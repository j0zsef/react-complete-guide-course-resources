import classes from './PostItem.module.css';

// eslint-disable-next-line react/prop-types
function PostItem({ post }) {
  return (
    <article className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostItem;
