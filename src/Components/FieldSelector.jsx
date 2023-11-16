import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

const FieldSelector = ({
  fields,
  selectedFields,
  onChange,
  setShowFields,
}) => {
  const [newFields, setNewFields] = useState(selectedFields);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "absolute" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Product Fields</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {fields.map((field, index) => (
            <Form.Check
              id={field.name}
              key={index}
              type="checkbox"
              label={field.name}
              checked={selectedFields.includes(field.name)}
              onChange={(e) => onChange(field.name, e.target.checked)}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowFields(false);
            //   setSelectedFields(newFields);
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default FieldSelector