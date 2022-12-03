import Spinner from 'react-bootstrap/Spinner';

export default function SpinnerComp({ ...props }) {
  return (
    <Spinner animation="border" variant="secondary"  {...props} />
  );
}