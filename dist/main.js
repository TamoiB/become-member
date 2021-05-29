const form = document.getElementById('form');
const submit = document.getElementById('submit');
const welcomeBody = document.getElementById('welcome');
const nameSlot = document.getElementById('name');
const inputName = document.getElementById('firstname');
var name = '  ';
const resubmit = document.getElementById('resubmit');

inputName.addEventListener('input', () => {
  name = inputName.value; 
  console.log(name)
})

submit.addEventListener('click', () => {
  form.style.display ='none';
  welcomeBody.style.display ='flex';
  nameSlot.innerText = name;
})
resubmit.addEventListener('click', () => {
  welcomeBody.style.display ='none';
  form.style.display= 'block';
})