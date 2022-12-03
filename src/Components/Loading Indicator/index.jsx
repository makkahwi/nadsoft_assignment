import Container from '../Base/Grid/Container';
import Spinner from '../Base/Spinner';

export default function LoadingIndicator() {
  return (
    <Container className="justify-content-center w-100 p-5">
      <Spinner />
    </Container>
  );
}