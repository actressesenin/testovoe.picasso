import { useEffect, useState } from 'react';
import './index.css';
import PostItem from '../entities/post/ui/PostItem';
import { postApi } from './appQuery';

function App() {
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const { data: posts, isLoading } = postApi.useFetchAllPostsQuery({
    limit: 15,
    start: currentPostStart,
  });
  const [isMyFetchingDown, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);

  useEffect(() => {
    if (isMyFetchingDown) {
      setCurrentPostStart((prev) => {
        return prev < 85 ? prev + 1 : prev;
      });
      setIsFetchingDown(false);
    }
  }, [isMyFetchingDown]);

  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollTop < 40) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      40
    ) {
      setIsFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop,
      );
    }
  };

  return (
    <>
      {posts && !isLoading ? (
        posts?.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
