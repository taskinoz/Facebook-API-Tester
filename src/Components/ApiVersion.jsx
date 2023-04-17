import { Form } from 'react-bootstrap';

const ApiVersion = ({
    apiVersion,
    setApiVersion,
    minVersion,
    maxVersion,
}) => {

    const optionHtml = [];
    for (let i = minVersion; i <= maxVersion; i++) {
        optionHtml.push(<option key={i} value={`v${i}.0`}>{`v${i}.0`}</option>)
    }

    return (
        <>
            <Form.Label>API Version:</Form.Label>
            <Form.Select
                value={apiVersion}
                onChange={e => setApiVersion(e.target.value)}
            >
                {optionHtml}
            </Form.Select>
        </>
    )
}

export default ApiVersion