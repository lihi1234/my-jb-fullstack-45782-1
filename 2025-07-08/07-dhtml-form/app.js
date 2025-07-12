
const CARS_KEY_NAME= "cars";

function addCar(event) {

  event.preventDefault();
  const data = collectDataFromForm();
  const newTR = generateTR(data);
  injectTRToDOM(newTR);
  saveCarToLocalStorage(data);
  clearForm();
}

function collectDataFromForm() {
  const Name = document.getElementById("car-name").value;
  const engineVolume = document.getElementById("engine-volume").value;
  const color = document.getElementById("car-color").value;
  const Pic = document.getElementById("car-pic").value;

  return {
    Name,
    engineVolume,
    color,
    Pic,
  };
}

function generateTR(data) {
  const newTR =
    `
      <tr style="background-color: ${data.color};">
                <td>${data.Name}</td>
                <td>${data.engineVolume}</td>
                <td><img src="${data.Pic}" class="car-pic"></td>
            </tr>

    `;
  return newTR;
}

function injectTRToDOM(newTR) {

  document.getElementById("car-list").innerHTML += newTR;

}

function loadCarsFromStorage() {
  const carsJson = localStorage.getItem(CARS_KEY_NAME);

  if (carsJson) {
    const cars = JSON.parse(carsJson);
    for (const car of cars) {
      const newTR = generateTR(car);
      injectTRToDOM(newTR);
    }

  }

}

function saveCarToLocalStorage(car) {
  const carsJson = localStorage.getItem(CARS_KEY_NAME) || "[]";
  const cars = JSON.parse(carsJson);
  cars.push(car);
  localStorage.setItem(CARS_KEY_NAME, JSON.stringify(cars));
}

function clearForm(){
  document.getElementById("car-form").reset();
}

loadCarsFromStorage();