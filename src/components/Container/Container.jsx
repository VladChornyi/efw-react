import PropTypes from "prop-types";
const stylescss = {
  width: "1280px",
  maxWidth: "100%",
  padding: "0 15px",
  margin: "0 auto",
};

export const Container = (props) => {
  return <div style={stylescss}>{props.children}</div>;
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
};
