import Wrapper from './Row.styled';

const formatTime = (time) => {
  if (time === 0) {
    return '00';
  }

  return time;
}

const Row = ({ name, speakers, startTime, endTime }) => {
  const speakersNames = speakers.map(({ name }) => name).join(', ');

  const startActivityTime = new Date(startTime);
  const endActivityTime = new Date(endTime);

  const startHours = formatTime(startActivityTime.getHours());
  const startMinutes = formatTime(startActivityTime.getMinutes());
  const endHours = formatTime(endActivityTime.getHours());
  const endMinutes = formatTime(startActivityTime.getMinutes());

  const timeString = `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;

  return (
    <Wrapper>
      {`${timeString}`} { name } { speakersNames && `(${speakersNames})` }
    </Wrapper>
  );
};

export default Row;
