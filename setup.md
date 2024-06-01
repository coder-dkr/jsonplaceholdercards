## Setup for Api fetching in React

- use **useState** hook to make a state variable for storing API data

```
const [ApiData, setApiData] = useState([{}])
```

- use **useEffect** hook for fetching data from your API for first time rendering


```
useEffect( () => {
  async function fetchData() {
    await fetch( yourAPI ).then(
      response => response.json()
    ).then(
      data => {
        setApiData(data)
      }
    )
  }
  fetchData()
  }, [])

```

- then use **.map()** method to render all the fetched data as a list

```
return (
    <>
    {ApiData.map( (data,index) => (

       <div key={index}> {data} </div>   

    ))}
    </div>
)

```