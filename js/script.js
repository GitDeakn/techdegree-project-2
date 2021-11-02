// Creates the html of up to 9 students from data.js and inserts them into the ul student-list.
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';
   // This loop runs to create html to be inserted into the ul based off what 'page number' is set in the page parameter
   // We add a conditional in the loop to check what data to grab from data.js based off the page paramater which changes the startIndex and endIndex variables
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const html = `<li class="student-item cf"> 
                           <div class="student-details">
                              <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
                              <h3>${data[i].name.first} ${data[i].name.last}</h3>
                              <span class="email">${data[i].email}</span>
                           </div>
                           <div class="joined-details">
                              <span class="date">Joined ${data[i].registered.date}</span>
                           </div>
                        </li>`
         ul.insertAdjacentHTML('beforeend', html);
      }
   }
}

// Creates 5 Buttons and adds an eventListener on which calls the showPage function when clicked
function addPagination(list) {
   const pages = Math.ceil(list.length / 9);
   const link_list = document.querySelector('.link-list');
   link_list.innerHTML = '';
   // Creates 5 li's with a child button and appends them to the link-list
   for (let i = 0; i < pages; i++) {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = [i + 1];
      link_list.appendChild(li);
      li.appendChild(button);
   }
   const buttons = document.getElementsByTagName('button'); 
   buttons[0].className = 'active'; 
   link_list.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {  //Checks if link-list event was a button
         for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');  //Removes active class from all
            e.target.classList = 'active';
            let page = e.target.textContent;
            showPage(data, page);
         }
      }
   })
}
// Calling Functions 
addPagination(data);
showPage(data, 1);










