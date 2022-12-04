import FormLabel from 'react-bootstrap/FormLabel';

export default function FormLabelComp({ children, ...props }) {
  return (
    <FormLabel {...props}>
      {children}
    </FormLabel>
  );
}