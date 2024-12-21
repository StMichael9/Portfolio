export const fetchData = async () => {
    const response = await fetch('http://myportfolio:5000/api/data');
    const data = await response.json();
    return data;
  };
  