

document.getElementById('submit-btn').addEventListener('click', (event) => {
    const userInput = document.getElementById('text').value;
    axios.post('/subArray', {
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

document.getElementById('submit-btn2').addEventListener('click', (event) => {
  const userInput1 = document.getElementById('bigConcat1').value;
  const userInput2 = document.getElementById('bigConcat2').value;
  const userInput3 = document.getElementById('bigConcat3').value;
  axios.post('/bigConcat', {
      userInput1: userInput1,
      userInput2: userInput2,
      userInput3: userInput3,
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