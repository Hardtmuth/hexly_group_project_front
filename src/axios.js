import axios from "axios";


// axios.get('http://localhost:8080/tasks')
//   .then(response => {
//     // Обработка успешного ответа
//     console.log(response.data);
//   })
//   .catch(error => {
//     // Обработка ошибок
//     console.error('Произошла ошибка при выполнении GET запроса:', error);
//   });

await axios.post('http://localhost:8080/task/create', { 
    text: 'Купить молоко',
    status: 'open',
    priority: 1,
}) 
.then(response => {
    // Обработка успешного ответа
    console.log(response.data);
})
.catch(error => {
    // Обработка ошибок
    console.error('Произошла ошибка при выполнении POST запроса:', error.toJSON);
});


// const fn = async () => {
//     const tempTask = {
//         text: 'Купить молоко',
//         status: 'open',
//         priority: 1,
//       };

//     const response = await axios.post('http://localhost:8080/task/create', tempTask)
//     .then(response => {
//         // Обработка успешного ответа
//         console.log(response.data);
//     })
//     .catch(error => {
//         // Обработка ошибок
//         console.error('Произошла ошибка при выполнении POST запроса:', error.toJSON);
//     });
// };
  


