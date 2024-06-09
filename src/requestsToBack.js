const getTasksList = () => {
  fetch('http://localhost:8080/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // You can use the data here to update the UI or for other purposes
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
};

export { getTasksList };
