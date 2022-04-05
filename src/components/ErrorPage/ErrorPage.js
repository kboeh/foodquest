import './ErrorPage.css';
import Nav from "../Nav/Nav.js";

function ErrorPage() {
    return (
      <div className='error-container'>
        <Nav />
        <div className='error-text-container'>
          <h1>404: Page not found</h1>
        <p>Oops! Sorry, this page has been eaten.</p>
        </div>
      </div>
    );
  }
  
  export default ErrorPage;