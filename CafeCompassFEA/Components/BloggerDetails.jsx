import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../Component-Stylings/BloggerDetails.scss';

const API = import.meta.env.VITE_BASE_URL;

export default function BloggerDetails() {
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [bloggerInfo, setBloggerInfo] = useState({});
  const [isExiting, setIsExiting] = useState(false);
  const [cafes, setCafes] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

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

  const { first_name, last_name, gender_identity, membership_status, reviewsFromBlogger } = bloggerInfo;

  const handleDelete = async () => {
    try {
      const response = await fetch(`${API}/bloggers/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        navigate('/bloggers');
      } else {
        console.error('Failed to delete the item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const showDeleteMessage = () => {
    setConfirmDeleteModal(true);
  };

  const confirmingDeletion = async () => {
    setIsExiting(true);
    await handleDelete();
    //once this function is completed since it goes in order of operations, the set timeout will change the below code to it's setStates within the given timeframe desinated 
    setTimeout(() => {
      setConfirmDeleteModal(false);
      setIsExiting(false);
    }, 500); 
  };
  // setTimeout is used to delay the running of a function or code block within. More Research needed. maybe? 


  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setConfirmDeleteModal(false);
      setIsExiting(false);
    }, 500);
  };

  return (
    <div className='blogger-detail-container'>
      <div className="blogger-detail">
        <h2 className='blogger-title'>Blogger Details</h2>
        <p className='first-name'><strong>First Name:</strong> {first_name}</p>
        <p className='last-name'><strong>Last Name:</strong> {last_name}</p>
        <p className='gender'><strong>Gender Identity:</strong> {gender_identity}</p>
        <p className='member-status'><strong>Membership Status:</strong> <span className={ membership_status ? 'blogger-active' : 'blogger-non-active' }>
          { `${membership_status ? 'Active' : 'Non-Active'}` }
        </span></p>

        <h3 className='reviews'><em>Cafes Reviewed</em></h3>
        {reviewsFromBlogger && reviewsFromBlogger.length > 0 ? (
          reviewsFromBlogger.map(review => {
            const cafe = cafes.find(cafe => cafe.id === review.cafe_id);
            const cafeName = cafe ? cafe.name : 'No Cafe Name Found';

            return (
              <div key={review.id} className="review">
                <p className='cafe-details'><strong>Cafe Name:</strong> {cafeName}</p>
                <p className='review-content'><strong>Content:</strong> {review.content}</p>
                <p className='review-rating'><strong>Rating:</strong> {review.rating}</p>
              </div>
            );
          })
        ) : (
          <p className='no-reviews'>No reviews available.</p>
        )}

        <section className='btn-selection'>
          <button className='btn-selection__back basic'><Link to='/bloggers'>Back</Link></button>
          <button className='btn-selection__edit basic'> <Link to={`/bloggers/${id}/edit`}>Edit</Link></button>
          <button className='btn-selection__delete basic' onClick={ showDeleteMessage }>Delete</button>
        </section>
      </div>

      {confirmDeleteModal && (
        <div className='msg-container'>
          {/* FORMATTED the message container with a useState true/false statement which will change the className to properly initiate the CSS animation in  */}
          <div className={`msg-container__message ${isExiting ? 'slide-out' : ''}`}>
            <p>Are you sure you want to delete this Blogger? 👁️ 🫦 👁️ 💦</p>
            <button onClick={ confirmingDeletion } className='yes-btn'>Yes! Begone from thine eyes! ☠️</button>
            <button onClick={ closeModal } className='no-btn'>Naah, Just Kidding ☕️ </button>
          </div>
        </div>
      )}
    </div>
  );
}
