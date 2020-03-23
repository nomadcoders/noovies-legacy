import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 0px 30px;
  padding: 10px 20px;
  border-radius: 15px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    placeholder={placeholder}
    onSubmitEditing={onSubmit}
    returnKeyType={"search"}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Input;
