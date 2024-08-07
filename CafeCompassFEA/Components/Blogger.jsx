import React from 'react'
import { Link } from 'react-router-dom'

export default function Blogger({ blogger, id }) {
  return (
    <main className='blogger-details' key={id}>
      <div>
        <h2 className='blogger-details__name'>
          <Link to={`/bloggers/${id}`}>
            {`${blogger.first_name} ${blogger.last_name}`}
          </Link>
        </h2>
        <div className='blogger-details-status'>
          Member Status:
          <span className={blogger.membership_status ? 'blogger-active' : 'blogger-non-active'}>
            {` ${blogger.membership_status ? 'Active' : 'Non-Active'}`}
          </span>
        </div>
      </div>
    </main>
  )
}
