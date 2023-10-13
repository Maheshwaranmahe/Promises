function getInputValues() {
    return new Promise((resolve, reject) => {
      const input1 = parseInt(document.getElementById('input1').value);
      const input2 = parseInt(document.getElementById('input2').value);
  
      if (input1 > input2) {
        alert('Input1 is greter than Input2.<br> Please Enter inputs properly.');
      } else {
        resolve(input1 + input2);
      }
    });
  }
  
  function calculateSum() {
    getInputValues()
      .then(result => {
        document.getElementById('result').innerHTML = result;
      })
      .catch(error => {
        document.getElementById('result').innerHTML = error;
      });
  }