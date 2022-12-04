import FormControl from 'react-bootstrap/FormControl';

export default function FormControlComp({ children, ...props }) {
  return (
    <FormControl {...props}>
      {children}
    </FormControl>
  );
}