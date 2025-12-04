let count = 0;

const para = document.createElement('p');
para.textContent = `Counter: ${count}`;
para.style.fontSize = '24px';
para.style.color = 'white';

const button = document.createElement('button');
button.textContent = 'Increment';
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.marginTop = '10px';
button.style.cursor = 'pointer';

button.addEventListener('click', () => {
    count++;
    para.textContent = `Counter: ${count}`;
    console.log(count);
});

const appDiv = document.getElementById('root');
appDiv.style.display = 'flex';
appDiv.style.flexDirection = 'column';
appDiv.style.alignItems = 'center';
appDiv.style.justifyContent = 'center';
appDiv.style.height = '100vh';
appDiv.appendChild(para);
appDiv.appendChild(button); 


export default appDiv;