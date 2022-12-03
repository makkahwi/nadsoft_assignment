import Spinner from '../Base/Spinner';
import Container from '../Base/Container';

export default function LoadingIndicator() {
  return (
    <Container className="justify-content-center w-100 p-5">
      <Spinner />
    </Container>
  );
}