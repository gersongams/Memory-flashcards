import * as React from 'react';
import Colors from '../constants/Colors';
import {TouchableOpacity} from "react-native";
import styled, {css} from 'styled-components/native'


const StyledButton = ({onPress, children, style, textStyle, disabled, ghost, textButton}) => {
  return (
    <TouchableOpacity style={{marginBottom: 12}} onPress={onPress} disabled={disabled}>
      <ButtonContainer ghost={ghost} textButton={textButton} disabled={disabled} style={{...style}}>
        <TextButton style={{...textStyle}} disabled={disabled}>
          {children}
        </TextButton>
      </ButtonContainer>
    </TouchableOpacity>
  );
};

const TextButton = styled.Text`
  color: ${props => props.disabled ? 'gray' : Colors.white};
  font-size: 18px;
  font-weight: bold;
`

const ButtonContainer = styled.View`
  background: ${props => props.disabled ? Colors.disabled : Colors.tintColor};
  padding: 12px 25px;
  border-radius: 4px;
  align-items: center;
  min-width: 240px;
  color: ${props => props.disabled ? 'gray' : Colors.white};
  ${props => props.ghost && css`
    background: transparent;
    border: 2px solid white;
  `}
  
  ${props => props.textButton && css`
    background: transparent;
    border: none;
  `}
`

export default StyledButton
