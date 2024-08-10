import React from 'react';
import '../Component-Stylings/Cafe.scss'

export default function Cafe({ cafe }) {
  return (
    <tr className='cafe-row'>
      <td className='cafe-name'>{cafe.name}</td>
      <td className='cafe-hours'>{cafe.opening_hours} - {cafe.closing_hours}</td>
      <td className='cafe-rating'>{cafe.average_rating}</td>
      <td className='cafe-wifi'>{cafe.wifi_available ? 'Yes' : 'No'}</td>
      <td className='cafe-seating'>{cafe.outdoor_seating ? 'Yes' : 'No'}</td>
      <td className='cafe-lgbtq'>{cafe.lgbtqia_friendly ? 'Yes' : 'No'}</td>
      <td className='cafe-established'>{new Date(cafe.established).toLocaleDateString()}</td>
    </tr>
  );
}


