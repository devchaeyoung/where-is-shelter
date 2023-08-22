import { React, useState, useContext } from 'react';
// import PoiReviewContext from '../../contexts/PoiReviewContext';

import PoiReview from './PoiReview'
import ReviewForm from './ReviewForm'

const PoiDetails = () => {
  
  const [isLogin, setIsLogin] = useState(false);

  return(
    <div>
      <PoiReview />
      <ReviewForm />
    </div>
  )
}

export default PoiDetails;