import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import '../Component-Stylings/BloggerDetails.scss';

const API = import.meta.env.VITE_BASE_URL;

export default function BloggerDetails() {
  const { id } = useParams();
  const [bloggerInfo, setBloggerInfo] = useState({});
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    fetch(`${API}/bloggers/${id}/reviews`)
      .then(res => res.json())
      .then(data => setBloggerInfo(data))
      .catch(err => console.error('Error fetching blogger details:', err));
  }, [id]);

  useEffect(() => {
    fetch(`${API}/cafes`)
      .then(res => res.json())
      .then(data => setCafes(data))
      .catch(err => console.error('Error fetching cafes:', err));
  }, []);

  const { first_name, last_name, email, gender_identity, membership_status, phone_number, reviewsFromBlogger } = bloggerInfo;

  return (
<div className='blogger-detail-container'>
    <div className="blogger-detail">
      <h2 className='blogger-title'>Blogger Details</h2>
      <p className='first-name'><strong>First Name:</strong> {first_name}</p>
      <p className='last-name'><strong>Last Name:</strong> {last_name}</p>
      {/* <p className='email'><strong>Email:</strong> {email}</p> */}
      <p className='gender'><strong>Gender Identity:</strong> {gender_identity}</p>
      <p className='member-status'><strong>Membership Status:</strong> <span className={ bloggerInfo.membership_status ? 'blogger-active' : 'blogger-non-active' }>
          { `${bloggerInfo.membership_status ? 'Active' : 'Non-Active'}` }
      </span></p>
      {/* <p className='number'><strong>Phone Number:</strong> {phone_number}</p> */}

      <h3 className='reviews'><em>Cafes Reviewed</em></h3>
      {reviewsFromBlogger && reviewsFromBlogger.length > 0 ? (
        reviewsFromBlogger.map(review => {

          const cafe = cafes.find(cafe => cafe.id === review.cafe_id);
          const cafeName = cafe ? cafe.name : 'No Cafe Name Found';

          return (
            <div key={review.id} className="review">
              <p className='cafe-details'><strong>Cafe Name:</strong> {cafeName}</p>
              {/* <p className='review-id'><strong>Review ID:</strong> {review.id}</p> */}
              <p className='review-content'><strong>Content:</strong> {review.content}</p>
              <p className='review-rating'><strong>Rating:</strong> {review.rating}</p>
              {/* <p className='review-cafe_id'><strong>Cafe ID:</strong> {review.cafe_id}</p> */}
            </div>
          );
        })
      ) : (
        <p className='no-reviews'>No reviews available.</p>
      )}

      <section className='btn-selection'>
        <button className='btn-selection__back basic'><Link to='/'>Back</Link></button>
        <button className='btn-selection__edit basic'><Link>Edit</Link></button>
        <button className='btn-selection__delete basic'><Link>Delete</Link></button>
      </section>
    </div>



    </div>
  );
}
