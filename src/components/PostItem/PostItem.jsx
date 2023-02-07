import PropTypes from 'prop-types';
import {ListItem, Title, Text} from './PostItem.styled'

export function PostItem({ title, text }) {
  return (
    <ListItem image={'https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg'}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </ListItem>
  );
}
PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};