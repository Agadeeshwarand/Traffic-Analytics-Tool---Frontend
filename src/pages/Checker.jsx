import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Checker = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const url = params.get('url');
  const [trafficData, setTrafficData] = useState(null);

  // Simulate fetching traffic data for the given URL
  useEffect(() => {
    if (url) {
      // Simulated traffic data based on URL (replace this with real API calls if available)
      const simulatedData = {
        labels: ['India', 'USA', 'UK', 'Germany', 'Canada'],
        data: [Math.random() * 1000, Math.random() * 800, Math.random() * 600, Math.random() * 400, Math.random() * 200],
      };
      setTrafficData(simulatedData);
    }
  }, [url]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Organic Traffic of {url}</h1>
      {trafficData ? (
        <div style={styles.graphContainer}>
          <Bar
            data={{
              labels: trafficData.labels,
              datasets: [
                {
                  label: 'Traffic',
                  data: trafficData.data,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Loading traffic data...</p>
      )}
      <p>Top countries: {trafficData?.labels.join(', ')}</p>
    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      marginTop: '80px', // Push the heading below the header
      fontSize: '28px',
      fontWeight: 'bold',
    },
    graphContainer: {
      marginTop: '70px',
      height: '400px',
      width: '80%',
      margin: '0 auto', // Center the graph horizontally
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  

export default Checker;
