import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/Traffic Analysis Tool Background.png'; // Replace with the correct path if needed

const Analyze = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (url) navigate(`/checker?url=${encodeURIComponent(url)}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Website Traffic Analyze</h1>
      <h3 style={styles.subheading}>See search traffic estimates for any website or webpage.</h3>
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter Website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          Check Traffic
          <span style={styles.arrow}>→</span>
        </button>
      </div>
      {/* "For example" text under the search box */}
      <p style={styles.exampleText}>For example: https://chatgpt.com/</p>
      {/* Description inside a box */}
      <div style={styles.infoBox}>
        <p>
          * A Website Traffic Checker analyzes and monitors website visitor data,
          including the number of visitors, their locations, traffic sources, and
          user behavior.
        </p>

        <p>* The primary functionalities include visualizing traffic trends, analyzing user behavior patterns, 
            and filtering data by various criteria like time, location, or device type. </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginTop: '80px',
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    width: '400px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '16px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  searchButton: {
    padding: '10px 20px',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    padding: '5px 10px',
    fontWeight: 'bold',
    color: '#00aaff',
    display: 'inline-block',
    marginLeft: '8px',
  },
  exampleText: {
    fontSize: '20px',
    color: '#555',
    marginTop: '5px',
  },
  infoBox: {
    marginTop: '70px',
    padding: '15px',
    width: '80%',
    borderRadius: '8px',
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light gray background
    textAlign: 'left',
    fontSize: '20px',
    color: '#333',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default Analyze;
