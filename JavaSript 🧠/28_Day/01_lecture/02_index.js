// Get collections
const htmlCollection = document.getElementsByTagName('li'); // LIVE
const nodeList = document.querySelectorAll('li'); // STATIC

console.log('Initial:');
console.log('HTMLCollection length:', htmlCollection.length); // 2
console.log('NodeList length:', nodeList.length); // 2

// NOW, let's add a new <li> dynamically
const newLi = document.createElement('li');
newLi.textContent = 'Item 3 (Added Dynamically)';
document.getElementById('myList').appendChild(newLi);

console.log('After adding a new <li>:');
console.log('HTMLCollection (LIVE) length:', htmlCollection.length); // 3 🟢 UPDATED!
console.log('NodeList (STATIC) length:', nodeList.length); // 2 ❌ Unchanged