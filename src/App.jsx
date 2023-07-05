import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Row, Col, Nav, Navbar, NavDropdown, Spinner } from 'react-bootstrap';
import ApiVersion from './Components/ApiVersion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faCog, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Settings from './Components/Settings';

function App() {
  const [apiVersion, setApiVersion] = useState('v12.0');
  const [productSet, setProductSet] = useState('');
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access-token') || '');
  const [appSecret, setAppSecret] = useState(localStorage.getItem('app-secret') || '');
  const [jsonOutput, setJsonOutput] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRunClick = () => {
    // Construct the API URL
    const apiUrl = `https://graph.facebook.com/${apiVersion}/${productSet}/products?limit=1000&after=0&fields=id,retailer_id,name,short_description,description,currency,price,product_catalog,manufacturer_part_number,custom_label_0,custom_label_1,custom_label_2,custom_label_3,custom_label_4,image_url,url&access_token=${accessToken}&appsecret_proof=${appSecret}`;
    setLoading(true);

    // Fetch the data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        setLoading(false);
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
        setLoading(false);
      })
      .catch(error => {
        // Display the error message in the textarea
        setJsonOutput('Error: ' + error.message);
        setLoading(false);
      });
  };

  const handleAPICursor = (url) => {
    setLoading(true);

    // Fetch the data from the API
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        setLoading(false);
        return response.json();
      })
      .then(data => {
        // Format the JSON output with indentation
        const formattedOutput = JSON.stringify(data, null, 2);

        // Update the state with the formatted output
        setJsonOutput(formattedOutput);
        setLoading(false);
      })
      .catch(error => {
        // Display the error message in the textarea
        setJsonOutput('Error: ' + error.message);
        setLoading(false);
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
      <Navbar expand="lg" className="navbar-bg">
        <Container className={settingsOpen?'blur':''}>
          <Navbar.Brand href="#home"><FontAwesomeIcon className="nav-icon" icon={faFacebookF} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <ApiVersion
                apiVersion={apiVersion}
                setApiVersion={setApiVersion}
                minVersion={12}
                maxVersion={16}
              />
              <Nav.Link onClick={() => setSettingsOpen(!settingsOpen)}>
                <FontAwesomeIcon icon={faCog} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className={settingsOpen?'blur':''}>
        <Form>
          <Row className="my-3">
            <Form.Group as={Col}>
              <Form.Label>Product Set:</Form.Label>
              <Form.Control value={productSet} onChange={e => setProductSet(e.target.value)} />
            </Form.Group>
          </Row>
          <Button disabled={loading} variant="primary" onClick={handleRunClick}>Run Command</Button>{' '}
          <Button variant="secondary" onClick={handleCopyClick}>Copy Output</Button>
        </Form>
        <Row className="my-3">
          <Col>
            <Spinner animation="border" variant="primary" hidden={!loading} />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <Form.Control className='my-3' id="json-output" as="textarea" rows={10} value={jsonOutput} readOnly />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            {jsonOutput !=="" && 
            (JSON.parse(jsonOutput).paging.previous || JSON.parse(jsonOutput).paging.next) && 
              <><Button variant="primary" disabled={loading} onClick={() => handleAPICursor(JSON.parse(jsonOutput).paging.previous)}>Prev</Button>
              {' '}
              <Button variant="primary" disabled={loading} onClick={() => handleAPICursor(JSON.parse(jsonOutput).paging.next)}>Next</Button></>
            }
          </Col>
        </Row>
      </Container>

      {settingsOpen && <Settings
        settingsOpen={settingsOpen}
        setSettingsOpen={setSettingsOpen}
        accessToken={accessToken}
        setAccessToken={setAccessToken}
        appSecret={appSecret}
        setAppSecret={setAppSecret}
      />}
    </div>
  )
}

export default App
