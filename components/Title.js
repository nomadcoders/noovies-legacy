import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
`;

const Title = ({ title }) => <Text>{title}</Text>;

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
