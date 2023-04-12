const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = document.getElementById('searchByID').value;
    console.log (answer)

    fetch(`http://localhost:3000/movies/${answer}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");
            title.innerText = data.title;
            summary.innerText = data.summary;
        })
  });
}

document.addEventListener('DOMContentLoaded', init);