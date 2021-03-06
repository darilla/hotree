//Dependencies
import React from "react";
import PropTypes from "prop-types";
//Custom
import { Container, H2 } from "./styles";

const Form = props => {
  const { title, content } = props;
  return (
    <Container>
      <H2>{title}</H2>
      {content}
    </Container>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequire
};

export default Form;
