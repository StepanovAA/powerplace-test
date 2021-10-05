import styled from "styled-components";

export default styled.div`
  margin-right: 24px;
  
  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 979px) {
    margin-bottom: 32px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ColumnTitle = styled.h3`
  font-weight: bold;
  font-size: 26px;
`;
