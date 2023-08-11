function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'John', age: 30 };
        // Simulate successful data retrieval after 1 second
        resolve(data);
      }, 1000);
    });
  }

  

async  function fetchData() {
    try {
    console.log('Fetching data...');
    const data = await fetchDataFromServer();
    console.log('Data received:', data);
    return data;
    } catch (error) {
    console.error('Error fetching data:', error);
    }
}

fetchData();
  

// example of Callbak hell 
aysnc_A(function(){
  async_B(function(){
    async_C(function(){

    })
  })
})






