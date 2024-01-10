import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../../../app/appQuery';

const PostInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: postFetched } = postApi.useFetchPostByIdQuery(Number(id));

  const navigateToMain = () => {
    navigate('/');
  };

  return (
    <div>
      {postFetched ? (
        <div>
          <h1>
            {postFetched.id}. {postFetched.title}
          </h1>
          <div>{postFetched.body}</div>
          <button onClick={navigateToMain}>Назад</button>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default PostInfo;
