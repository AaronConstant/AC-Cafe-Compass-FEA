import React from 'react'
import { Link } from 'react-router-dom'
import femalePic from '../resource-pics/femaleprofilepic.png'
import malePic from '../resource-pics/maleprofilepic.png'
import nonBinaryPic from '../resource-pics/NonBinaryPhoto.png'

export default function Blogger({blogger, id}) {
  return (
  <main className='blogger-details' key={ id }>
    <div>
      {/* {if(blogger.gender_identity.toLowerCase() === 'male'){
        img
      }} */}
      <h2 className='blogger-details__name'>
          <Link to={`/bloggers/${id}/reviews`}>
              {`${blogger.first_name} ${blogger.last_name}`} 
          </Link>
      </h2>
      <div className='blogger-details__status'>
      Member Status:
      <span className={ blogger.membership_status ? 'blogger-active' : 'blogger-non-active' }>
          { `${blogger.membership_status ? ' Active' : ' Non-Active'}` }
      </span>
      </div>
    </div>
      
</main>
  )
}
