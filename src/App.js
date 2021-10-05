import { useState, useEffect } from 'react';
import Table from './Components/Table';
import Wrapper, { Title } from './App.styled';

const callApi = async (path) => await fetch(`https://dev.powerplace.online/api/v1/test/${path}`)
  .then((response) => response.json());

function App() {
  const [areas, setAreas] = useState([]);
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    callApi('areas').then((data) => setAreas(data));
    callApi('agenda').then((data) => setAgenda(data));
  }, []);

  return (
    <Wrapper>
      <Title>Расписание</Title>
      <Table areas={areas} agenda={agenda} />
    </Wrapper>
  );
}

export default App;
