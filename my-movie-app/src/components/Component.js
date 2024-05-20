import React, { useState, useEffect } from 'react';

function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MyComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
     .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
     .then(data => {
        setData(data);
        setIsLoading(false);
      })
     .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <DataTable data={data} />;
}

export default MyComponent;
