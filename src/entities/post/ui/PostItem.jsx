import { useNavigate } from 'react-router-dom';

const PostItem = ({ post }) => {
  const navigate = useNavigate();
  const navigateToPostInfo = () => {
    navigate(`/${post.id}`);
  };

  return (
    <>
      {post ? (
        <div>
          {post.id}. <strong>{post.title}</strong>.{' '}
          {post.body.length > 20 ? post.body.substring(0, 20) + '...' : post.body}
          <div>
            <button onClick={navigateToPostInfo}>Просмотр</button>
          </div>
        </div>
      ) : (
        <div>Posts not found</div>
      )}
    </>
  );
};

export default PostItem;
