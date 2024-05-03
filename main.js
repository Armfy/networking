async function displayIPAndLocation() {
  try {
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipResponse.json();

    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const locationData = await locationResponse.json();

    const locationInfo = `
      <p>IP Address: ${ip}, ${locationData.org}</p>
      <p>${locationData.postal}, ${locationData.street_name}, ${locationData.city}, ${locationData.country_name}<img src="https://flagcdn.com/${locationData.country.toLowerCase()}.svg" alt="${locationData.country} flag"></p>
      <p>Region: ${locationData.region}</p>
    `;

    document.getElementById('location-info').innerHTML = locationInfo;
  } catch (error) {
    console.error('Error:', error);
  }
}

displayIPAndLocation();