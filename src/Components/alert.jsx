import Alert from "react-bootstrap/Alert";

function AlertComponent(props) {
  if (props.show === true) {
    return (
      <Alert variant="danger" onClose={() => props.setShow(false)} dismissible>
        <Alert.Heading>{props.alertHeading}</Alert.Heading>
        <p>{props.alertText}</p>
      </Alert>
    );
  }
}

export default AlertComponent;
