import { useState } from "react";
import { Form, Modal, Button, ToggleButton, ButtonGroup } from "react-bootstrap";

const FieldSelector = ({
  fields,
  selectedFields,
  onChange,
  setShowFields,
}) => {
  const [newFields, setNewFields] = useState(selectedFields);
  const [description, setDescription] = useState(true);
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
          <div className="d-flex justify-content-end align-items-center">
            <span className="mx-2">Descriptions</span>
            <ButtonGroup toggle>
              <ToggleButton
                className="py-0 px-2"
                type="radio"
                variant="outline-primary"
                name="radio"
                value={1}
                checked={description}
                onClick={() => setDescription(true)}
              >
                Show
              </ToggleButton>
              <ToggleButton
                className="py-0 px-2"
                type="radio"
                variant="outline-primary"
                name="radio"
                value={0}
                checked={!description}
                onClick={() => setDescription(false)}
              >
                Hide
              </ToggleButton>
            </ButtonGroup>
          </div>
          {fields.map((field, index) => (
            <>
              <Form.Check
                id={field.name}
                key={index}
                type="checkbox"
                label={field.name}
                checked={selectedFields.includes(field.name)}
                onChange={(e) => onChange(field.name, e.target.checked)}
              />
              {description && (
                <>
                  <Form.Text className="text-muted">
                    {field.description}
                  </Form.Text>
                  {fields.length - 1 !== index && <hr />}
                </>
              )}
            </>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowFields(false);
              // setSelectedFields(newFields);
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