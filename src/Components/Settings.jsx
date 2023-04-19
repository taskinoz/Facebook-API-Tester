import { Button, Modal, Form, Col } from "react-bootstrap";

const Settings = ({
    settingsOpen = false,
    setSettingsOpen,
    accessToken,
    setAccessToken,
    appSecret,
    setAppSecret,
}) => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'absolute' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Form.Group as={Col} className="px-3 py-2">
                    <Form.Label>Access Token:</Form.Label>
                    <Form.Control value={accessToken} onChange={e => setAccessToken(e.target.value)} />
                </Form.Group>
                <Form.Group as={Col} className="px-3 py-2">
                    <Form.Label>App Secret:</Form.Label>
                    <Form.Control value={appSecret} onChange={e => setAppSecret(e.target.value)} />
                </Form.Group>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setSettingsOpen(false)}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default Settings;