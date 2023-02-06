import PropTypes from 'prop-types';
export function PostItem({ title, text }) {
  return (
    <li>
      <h4>{title}</h4>
      <p>{text}</p>
    </li>
  );
}
PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};