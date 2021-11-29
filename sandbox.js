

document.getElementById('submit-btn').addEventListener('click', (event) => {
    const userInput = document.getElementById('text').value;
    axios.post('/solve', {
        userInput: userInput
      })
      .then((res) => {
          if(document.getElementById('res-element')) {
            document.getElementById('res-element').parentElement.removeChild(document.getElementById('res-element'));
          }
          const resEl = document.createElement('h1');
          resEl.textContent = res;
          resEl.id = 'res-element';
          document.body.appendChild(resEl);
      })
      .catch(() => console.log);
});