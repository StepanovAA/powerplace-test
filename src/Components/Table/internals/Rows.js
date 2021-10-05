import Row from './Row';
import Wrapper, {ActivityWrapper, Date} from './Rows.styled';

const Rows = ({ agenda }) => {
  if (!agenda) {
    return null;
  }

  const agendaByDate = agenda.reduce((acc, item) => {
    const [date] = item.startTime.split('T');

    if (acc[date]) {
      return {
        ...acc,
        [date]: [...acc[date], item],
      }
    }

    return {
      ...acc,
      [date]: [item],
    };

  }, {});

  return (
    <Wrapper>
      {
        Object.keys(agendaByDate).map((date) => {
          return (
            <ActivityWrapper key={date}>
              <Date>{ date }</Date>
              <>
                {
                  agendaByDate[date].map(({ id, name, speakers, startTime, endTime }) => (
                    <Row
                      key={id}
                      name={name}
                      speakers={speakers}
                      startTime={startTime}
                      endTime={endTime}
                    />
                  ))
                }
              </>
            </ActivityWrapper>
          )
        })
      }
    </Wrapper>
  )
};

export default Rows;
