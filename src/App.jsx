import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';


function App() {
  const [apiVersion, setApiVersion] = useState('v12.0');
  const [productSet, setProductSet] = useState('');
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access-token') || '');
  const [appSecret, setAppSecret] = useState(localStorage.getItem('app-secret') || '');
  const [jsonOutput, setJsonOutput] = useState('');

  const handleRunClick = () => {
    // Construct the API URL
    const apiUrl = `https://graph.facebook.com/${apiVersion}/${productSet}/products?limit=1000&after=0&fields=id,retailer_id,name,short_description,description,currency,price,product_catalog,manufacturer_part_number,custom_label_0,custom_label_1,custom_label_2,custom_label_3,custom_label_4,image_url,url&access_token=${accessToken}&appsecret_proof=${appSecret}`;

    // Fetch the data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // Format the JSON output with indentation
        const formattedOutput = JSON.stringify(data, null, 2);

        // Update the state with the formatted output
        setJsonOutput(formattedOutput);

        // Save the input values to local storage
        localStorage.setItem('access-token', accessToken);
        localStorage.setItem('app-secret', appSecret);
      })
      .catch(error => {
        // Display the error message in the textarea
        setJsonOutput('Error: ' + error.message);
      });
  };

  const handleCopyClick = () => {
    // Copy the JSON output to the clipboard
    const jsonOutputElement = document.getElementById('json-output');
    jsonOutputElement.select();
    document.execCommand('copy');
  };

  return (
    <div className="App">
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>API Version:</Form.Label>
              <Form.Select value={apiVersion} onChange={e => setApiVersion(e.target.value)}>
                <option value="v12.0">v12.0</option>
                <option value="v13.0">v13.0</option>
                <option value="v14.0">v14.0</option>
                <option value="v15.0">v15.0</option>
                <option value="v16.0">v16.0</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Product Set:</Form.Label>
              <Form.Control value={productSet} onChange={e => setProductSet(e.target.value)} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Access Token:</Form.Label>
              <Form.Control value={accessToken} onChange={e => setAccessToken(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>App Secret:</Form.Label>
              <Form.Control value={appSecret} onChange={e => setAppSecret(e.target.value)} />
            </Form.Group>
          </Row>
          <Button variant="primary" onClick={handleRunClick}>Run Command</Button>{' '}
          <Button variant="secondary" onClick={handleCopyClick}>Copy Output</Button>
        </Form>
        <Form.Control id="json-output" as="textarea" rows={10} value={jsonOutput} readOnly />
      </Container>
    </div>
  )
}

export default App
