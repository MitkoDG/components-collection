const result = document.getElementById('result')
const filter = document.getElementById('filter')

filter.addEventListener('input', (e) => {
    filterUsers(e.target.value);
})
const baseURL = 'https://randomuser.me/api/?results=50'
let userList = []

async function getUsers() {
  const res = await fetch(baseURL)
  const { results } = await res.json()

  result.innerHTML = ''

  results.forEach((user) => {
    const li = document.createElement('li')

    li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
    </div>`
    userList.push(li);
    result.appendChild(li)
  })
}
getUsers()

function filterUsers(searchParams) {
    userList.forEach(user => {
        if (!user.innerText.toLowerCase().includes(searchParams.toLowerCase())) {
            user.classList.add('hide')
        } else {
            user.classList.remove('hide')
        }
    })
}

//alternative way
function filterByInput(searchParams) {
    const resultList = document.querySelectorAll('.user-list li');
    resultList.forEach(u => {
        if (!u.textContent.toLowerCase().includes(searchParams.toLowerCase())) {
            u.classList.add('hide')
        } else {
            u.classList.remove('hide')
        }
    })
}