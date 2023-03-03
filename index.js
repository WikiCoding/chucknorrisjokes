const myDiv = document.querySelector('.joke')

const fetchData = async () => {
  const fetchData = await fetch('https://api.chucknorris.io/jokes/random', {
    method: 'GET'
  })
  try {
    const joke = await fetchData.json();

    myDiv.innerHTML = joke.value
  } catch (e) {
    myDiv.innerHTML = "Sorry couldn't get your joke, try refreshing the page"
  }
}

fetchData();
