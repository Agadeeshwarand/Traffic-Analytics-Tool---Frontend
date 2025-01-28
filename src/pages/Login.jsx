const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate navigation to home page (frontend only)
    window.location.href = '/';
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Create a New Account</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email Address" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <input type="password" placeholder="Confirm Password" style={styles.input} />
          {/* Adding more margin above the button */}
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Sign Up</button>
          </div>
        </form>
        <p style={styles.text}>
          Already have an account? <a href="/login" style={styles.link}>Log in</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: "'Arial', sans-serif",
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '350px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
  },
  buttonContainer: {
    marginTop: '40px', // Add extra margin to move the button down
  },
  button: {
    padding: '10px 70px',
    backgroundImage: 'linear-gradient(to right, #43cea2,rgba(24, 91, 157, 0.72))', // Button gradient
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  text: {
    marginTop: '15px',
    color: '#000',
    fontSize: '14px',
  },
  link: {
    color: '#000',
    textDecoration: 'underline',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Login;
