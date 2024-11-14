
document.addEventListener('DOMContentLoaded', function(){


  let formData={}
  const form = document.querySelector('form');
  const LS = localStorage;
  
  form.addEventListener('input', function(event){
    formData[event.target.name] = event.target.value;
    
    LS.setItem('formData', JSON.stringify(formData) )
  })
  if(LS.getItem('formData')){
    formData=JSON.parse(LS.getItem('formData'))
    //console.log(formData)
    //form.elements[name]
    for(let key in formData){
      form.elements[key].value= formData[key];
    }
  }
})

  
  
  //   const requestURL = 'http://localhost:8080/user/registration' ; 
  
  //   function sendRequest(method, url, body = null){
    //     return new Promise((resolve, reject)=>{
      //       const xhr = new XMLHttpRequest()
      
      //       xhr.open( method, url)
      //       xhr.responseType='json'
      //       xhr.setRequestHeader('Content-Type', 'application/json' )
//       xhr.onload = ()=> {
  //         console.log(xhr.response)
  //       }
  
  //       xhr.onload=()=>{
    //         if(xhr.status>=400){
      //           reject(xhr.response)
//         }else{
  //           resolve(xhr.response)
  //         }
//       }
//     xhr.onerror=()=>{
  //       console.log(xhr.response)
  //     }
  //       xhr.send(JSON.stringify(body))
  
//   }) }

// const body = {
//   firstname: "Иван",
//   lastname: "Ржевский",
//   email: "strong@yandex.ru",
//   password: "123"
// }

// sendRequest ('POST', requestURL, body)
// .then( data=>console.log(data))
// .catch( err => console.log(err))






//   fetch('http://localhost:8080/user/registration', { 
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json' 
//     },
//     body: jsonData 
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Ошибка при регистрации');
//     }
//     return response.json();
//   })
//   .then(data => { 
//     console.log('Регистрация успешно завершена:', data); 
//   })
//   .catch(error => { 
//     console.error('Ошибка:', error);
//   });
// })