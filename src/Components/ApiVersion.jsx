import { Form, NavDropdown } from 'react-bootstrap';

const ApiVersion = ({
    apiVersion,
    setApiVersion,
    minVersion,
    maxVersion,
    newDropdown = true,
}) => {

    const optionHtml = [];
    for (let i = minVersion; i <= maxVersion; i++) {
        if (newDropdown) {
            optionHtml.push(<NavDropdown.Item key={i} onClick={() => setApiVersion(`v${i}.0`)}>{`v${i}.0`}</NavDropdown.Item >)
        }
        else {
            optionHtml.push(<option key={i} value={`v${i}.0`}>{`v${i}.0`}</option>)
        }
    }
    return newDropdown ?
        <>
            <NavDropdown title={apiVersion} id="basic-nav-dropdown">
                {optionHtml}
            </NavDropdown>
        </>
    :
        <>
            <Form.Label>API Version:</Form.Label>
            <Form.Select
                value={apiVersion}
                onChange={e => setApiVersion(e.target.value)}
            >
                {optionHtml}
            </Form.Select>
        </>
}

export default ApiVersion