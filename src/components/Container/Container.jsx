import PropTypes from 'prop-types';
export const Container = (props) => {
        return (<div>{props.children}</div>)
}
Container.propTypes = {
    children: PropTypes.node.isRequired,
}