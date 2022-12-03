import Button from 'react-bootstrap/Button';

export default function ButtonComp({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
}