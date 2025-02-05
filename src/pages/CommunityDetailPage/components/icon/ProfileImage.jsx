import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProfileImage = ({
  src = '', 
  alt = '프로필 이미지', 
  className = 'w-full h-full object-cover'
}) => {
  // 더미 이미지 배열 이미지 추가 필요함
  const dummyImages = [
    '../../../public/images/dummy-user-img.png',
    '../../../public/images/dummy-user-img2.png',
    '../../../public/images/dummy-user-img3.png'
  ];

  const [dummyImage] = useState(() => {
    return dummyImages[Math.floor(Math.random() * dummyImages.length)];
  });

  return (
    <img
      src={src || dummyImage}
      alt={alt}
      className={className}
    />
  );
};

ProfileImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default ProfileImage;
