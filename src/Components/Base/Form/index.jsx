import Form from 'react-bootstrap/Form';

export default function FormComp({ children, ...props }) {
  return (
    <Form {...props}>
      {children}
    </Form>
  );
}