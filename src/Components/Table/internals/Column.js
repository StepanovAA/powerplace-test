import Rows from "./Rows";
import Wrapper, { ColumnTitle } from './Column.styled';

const Column = ({ title, prefix = '', areaId, agenda }) => {
  return (
    <Wrapper>
      <ColumnTitle>{`${prefix} ${title}`}</ColumnTitle>
      <Rows agenda={agenda[areaId]} />
    </Wrapper>
  )
};

export default Column;
