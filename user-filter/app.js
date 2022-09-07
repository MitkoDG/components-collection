const result = document.getElementById('result')
const filter = document.getElementById('filter')

const baseURL = 'https://randomuser.me/api/?results=10'
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
