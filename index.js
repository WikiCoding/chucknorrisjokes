const myDiv = document.querySelector('.joke')

const fetchData = async () => {
  const fetchData = await fetch('https://api.chucknorris.io/jokes/random', {
    method: 'GET'
  })
  const joke = await fetchData.json();

  myDiv.innerHTML = joke.value
}

fetchData();