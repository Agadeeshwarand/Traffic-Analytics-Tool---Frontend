import { Link } from 'react-router-dom';
import ButtonBackground from '../assets/Traffic Analysis Tool Background.png'; // Add your button background image path
import RightImage from '../assets/111.svg'; // Add your right-side image path

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>
          <span style={styles.traffic}>Traffic</span>
          <br />
          <span style={styles.analyzer}>ANALYZER</span>
        </h1>
        <button style={styles.button}>
          <Link to="/analyze" style={styles.buttonLink}>
            Analyze Now 
            <span style={styles.arrowBox}>→</span>
          </Link>
        </button>
      </div>
      <div style={styles.rightSection}>
        <img src={RightImage} alt="Right Side Illustration" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100vh',
    padding: '0 50px',
    textAlign: 'left',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightSection: {
    flexShrink: 0,
  },
  title: {
    marginBottom: '20px',
  },
  traffic: {
    fontSize: '100px',
    fontFamily: "'Great Vibes', cursive",
    fontWeight: '400',
    color: 'black',
  },
  analyzer: {
    fontSize: '100px',
    fontFamily: "'Times New Roman', serif",
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundImage: `url(${ButtonBackground})`, // Add background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '10px 30px',
    borderRadius: '25px',
    border: '2px solidrgb(255, 255, 255)',
    cursor: 'pointer',
    boxShadow: '0px 5px 15px rgba(255, 255, 255, 0.32)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  buttonLink: {
    color: 'black',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  arrowBox: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: '#00aaff', // Blue background for the arrow box
    color: 'white', // White arrow
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // 3D shadow effect
  },
  image: {
    maxWidth: '400px', // Set a maximum width to ensure it fits nicely
    maxHeight: '500px', // Set a maximum height if needed
    objectFit: 'contain', // Ensures the image maintains aspect ratio
  },
};

export default Home;
