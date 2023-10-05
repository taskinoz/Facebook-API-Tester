import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Modal, Form, Col, InputGroup } from "react-bootstrap";

const Settings = ({
    settingsOpen = false,
    setSettingsOpen,
    accessToken,
    setAccessToken,
    appSecret,
    setAppSecret,
}) => {

    const [showToken, setShowToken] = useState(true);
    const [showSecret, setshowSecret] = useState(true);

    return (
      <div
        className="modal show"
        style={{ display: "block", position: "absolute" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>API Keys</Modal.Title>
          </Modal.Header>
          <Form.Group as={Col} className="px-3 py-2">
            <Form.Label>Access Token:</Form.Label>
            <InputGroup>
              <Form.Control
                type={showToken ? "password" : "text"}
                value={accessToken}
                onChange={(e) => setAccessToken(e.target.value)}
              />
              <Button
                aria-label="Show Token"
                onClick={() => setShowToken(!showToken)}
              >
                <FontAwesomeIcon icon={!showSecret ? faEye : faEyeSlash} />
              </Button>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} className="px-3 py-2">
            <Form.Label>App Secret:</Form.Label>
            <InputGroup>
              <Form.Control
                type={showSecret ? "password" : "text"}
                value={appSecret}
                onChange={(e) => setAppSecret(e.target.value)}
              />
              <Button
                aria-label="Show Secret"
                onClick={() => setshowSecret(!showSecret)}
              >
                <FontAwesomeIcon icon={!showToken ? faEye : faEyeSlash} />
              </Button>
            </InputGroup>
          </Form.Group>
          <Modal.Footer>
            <Button variant="primary" onClick={() => setSettingsOpen(false)}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
}

export default Settings;