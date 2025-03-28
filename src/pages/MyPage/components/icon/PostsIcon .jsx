import PropTypes from 'prop-types';

const PostsIcon = ({ active }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={active ? '#00A7E1' : '#1E1E1E'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9L15 3ZM19 19H5V5H14V10H19M17 14H7V12H17M14 17H7V15H14" />
    </svg>
  );
};

export default PostsIcon;

PostsIcon.propTypes = {
  active: PropTypes.bool.isRequired,
};
