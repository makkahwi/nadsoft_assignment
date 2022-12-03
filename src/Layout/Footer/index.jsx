import Navbar from 'react-bootstrap/Navbar';
import Container from '../../Components/Base/Grid/Container';

export default function Footer() {
  return (
    <Navbar bg="light" fixed="bottom">
      <Container className="mx-5 my-3 justify-content-center">
        All Rights Reserved For
        <a href="https://suhaib.dev/" target="_blank" rel="noreferrer" className="mx-1">Suhaib Ahmad</a>,
        <a href="https://nadsoft.net/" target="_blank" rel="noreferrer" className="mx-1">NadSoft</a>&
        <a href="https://covid19api.com/" target="_blank" rel="noreferrer" className="mx-1">COVID19 API</a>
        | {new Date().getFullYear()}
      </Container>
    </Navbar>
  );
}