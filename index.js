// Add your code here
const nameEmail = {
    'name': 'Steve',
    'email': 'steve@steve.com',
};

const configurationObject = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify(nameEmail),
};

function submitData() {
  return fetch("http://localhost:3000/users", configurationObject).then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const newId = object.id;
    const idElement = document.createElement('p');
    idElement.textContent = newId;
    document.body.appendChild(idElement);
    console.log(object)
  })
  .catch(function (error){
    const errorElement = document.createElement('p');
    errorElement.textContent = 'Unauthorized Access';
    document.body.appendChild(errorElement);
    console.log(error.message);
  })
}


/*
const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

// method: "POST" is missing from the object below
const configurationObject = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
*/
