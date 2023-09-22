import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../api';
import { ReviewItem, ReviewTitle, ReviewP } from './Review.styled';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const param = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviewsData = await fetchReviews(param.movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }

    getReviews();
  }, []);

  return (
    <div>
      {!reviews.length && <h2>There aren't any reviews for this movie</h2>}
      {reviews.length > 0 && (
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
    </div>
  );
};

export default Review;
