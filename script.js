
const ul = document.getElementById("jokeContainer")
const jokeData = async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    const data = await res.json();
    const li = document.createElement('li');

    li.innerText = data.joke;
    ul.appendChild(li);
}
jokeData();

const refreshPage = () => {
    window.location.reload();
}