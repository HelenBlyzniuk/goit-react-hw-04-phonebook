import styled from '@emotion/styled';

export const ListContainer = styled.ol`
  width: 600px;
  border: solid 1px green;
  padding: 20px;
  box-shadow: 10px 5px 5px grey;
  background-color: green;
  font-weight: bold;
  color: white;
`;
export const ListItem = styled.li`
  font-size: 25px;
  font-weight: normal;
  height: 40px;
  margin-left: 20px;
  margin-top: 25px;
  color: white;
  display: flex;
  justify-content: space-between;
  aling-items: center;
`;

export const ListButton = styled.button`
  font-size: 15px;
  background-color: white;
  color: green;
  display: block;
  margin-top: 15px;
  border: solid 1px white;
  min-width: 100px;
  height: 40px;
  box-shadow: 10px 5px 5px grey;
  margin: 0;
  font-weight: bold;

  &:hover {
    scale: 1.2;
  }
`;
