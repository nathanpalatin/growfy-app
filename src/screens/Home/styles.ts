import styled from 'styled-components/native';


export const Container = styled.View`

    flex: 1;
    justify-content: center;
   
   
`;

export const Title = styled.Text`

  color: #fff;
  font-weight: bold;
  font-size: 32px;
  font-family: 'Inter_700Bold';
  left: 20px;

   
`;

export const Subtitle = styled.Text`
   color: #fff;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Inter_400Regular';
  left: 20px;
  margin-bottom: 20px;

`;

export const Input = styled.TextInput`
    left: 20px;
    padding: 14px;
    margin-bottom: 7px;
    font-size: 14px;
    border-radius: 6px;
    height: 50px;
    width: 90%;
    background-color: #fff;
`;

export const Bg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  width: 100%;
`;

  export const Switcher = styled.Switch`
   top: 80px;
   position: absolute;
   right: 20px;
  `;


export const Photo = styled.Image`
 
  width: 150px;
  height: 150px;
  align-self: center; 

`;


