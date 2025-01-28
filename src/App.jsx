import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Analyze from './pages/Analyze';
import Checker from './pages/Checker';
import Login from './pages/Login';
// Import the logo and background image
import Logo from './assets/Logo - web.svg';
import BackgroundImage from './assets/Traffic Analysis Tool Background.png';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logoContainer}>
            <img src={Logo} alt="Logo" style={styles.logo} />
            <span style={styles.title}>Traffic Analyzer</span>

          </div>
          <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/analyze" style={styles.link}>Analyze</Link>
            <Link to="/checker" style={styles.link}>Checker</Link>
            <Link to="/login" style={styles.link}>Login</Link>
          </nav>
        </header>
        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/checker" element={<Checker />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};


const styles = {
  container: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'auto',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Light background with transparency
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow
    backdropFilter: 'blur(8px)', // Optional blur effect
    flexWrap: 'wrap', // Ensures content wraps if it overflows
    boxSizing: 'border-box', // Ensures padding and borders are included in the width calculation
    borderBottom: '2px solid black', // Add black line under the header
},

  

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  logo: {
    width: '50px',
    marginRight: '20px',
  },
  title: {
    fontSize: '25px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '10px', // Space between buttons
    alignItems: 'center',
  },
  link: {
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'bold', // Make the font bold
      color: 'white', // Set the font color to black
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px', // Set the width of the button
      height: '40px', // Set the height of the button
      borderRadius: '8px', // Rounded corners
      backgroundImage: `url(${BackgroundImage})`, // Background image for buttons
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid white', // Optional border for contrast
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a 3D effect
      cursor: 'pointer',
    },
  
    linkHover: {
      opacity: '0.9', // Slightly dim the background on hover
      transition: '0.3s ease',
    },    

heading: {
  fontSize: '48px', // Adjust size to match the image
  fontWeight: 'bold', // Bold text
  fontFamily: "'Times of roman'", // Replace with the specific font from the image
  color: 'black', // Black font color
  marginBottom: '20px',
},
subheading: {
  fontSize: '24px', // Smaller subheading
  fontWeight: '400', // Normal weight
  fontFamily: "'Arial', sans-serif", // Match font family
  color: 'black',
  marginBottom: '20px',
},
button: {
  padding: '10px 20px',
  backgroundColor: '#00aaff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
},
};


export default App;
