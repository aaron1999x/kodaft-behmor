import React from 'react'

const FeatureItem = ({ icon, text }) => {
  return (
    <div className='flex gap-3 items-center'>
      {icon}
      {text}
    </div>
  );
}

export default FeatureItem