

document.getElementById('submit-btn').addEventListener('click', (event) => {
    const userInput = document.getElementById('text').value;
    axios.post('/solve', {
        userInput: userInput
      })
      .then((res) => {
          if(document.getElementById('res-element')) {
            document.getElementById('res-element').parentElement.removeChild(document.getElementById('res-element'));
          }
          const resEl = document.createElement('h3');
          console.log(res.data);
          resEl.textContent = `array out is: ${JSON.stringify(res.data)}`;
          resEl.id = 'res-element';
          document.body.appendChild(resEl);
          userInput.value = '';
      })
      .catch(() => console.log);
});