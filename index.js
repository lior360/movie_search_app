//Using Axios

const fetchData = async ()=>{
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey: '6943a6e6',
            i: "tt0848228"
        }
    });
    console.log(response.data);
}

fetchData();

