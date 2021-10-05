import Column from "./internals/Column";
import Wrapper from "./Table.styled";

const Table = ({ areas, agenda }) => {
  return (
    <>
      {
        areas.length && (
          <Wrapper>
            {
              areas.map(({ id, title }) => (
                <Column
                  style={{ marginRight: '12px' }}
                  key={id}
                  prefix="Комната"
                  title={`"${title}"`}
                  areaId={id}
                  agenda={agenda}
                />
              ))
            }
          </Wrapper>
        )
      }
    </>
  )
};

export default Table;
