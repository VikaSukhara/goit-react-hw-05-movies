import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api';
import { ReviewItem, ReviewTitle, ReviewP } from './Review.styled';
import { Loader } from 'components/Loader';

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState();
  const param = useParams();

  useEffect(() => {
    const controller = new AbortController();
    async function getReviews() {
      try {
        setLoading(true);
        const reviewsData = await fetchReviews(param.movieId, {
          signal: controller.signal,
        });
        setReviews(reviewsData.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getReviews();
    return () => controller.abort();
  }, [param.movieId]);

  return (
    <div>
      {loading && <Loader />}
      {reviews && (
        <ul style={{ marginLeft: '40px' }}>
          {reviews.map(review => {
            return (
              <ReviewItem key={review.id}>
                <ReviewTitle>Author: {review.author}</ReviewTitle>

                <ReviewP>{review.content}</ReviewP>
              </ReviewItem>
            );
          })}
        </ul>
      )}

      {reviews && reviews.length === 0 && (
        <h2>There aren't any reviews for this movie</h2>
      )}
    </div>
  );
};

export default Review;
