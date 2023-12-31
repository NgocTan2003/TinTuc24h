var StorageAccount = []
var boxAccount = document.querySelector('.BoxLogin')
var Clock = document.querySelector('.Clock')

function initAccount() {
    const data = JSON.parse(localStorage.getItem('ListAccount'))
    if (data !== null) {
        data.forEach((item) => {
            StorageAccount.push(item)
        })
    }

    const ArrAccount = {
        Username: "admin",
        Password: "123",
        Gmail: "admin@gmail.com",
        CheckOnline: false,
    }
    let check = 0;
    StorageAccount.forEach(item => {
        if (item.Gmail === "admin@gmail.com") {
            check = 1
        }
    })
    if (check === 0) {
        StorageAccount.push(ArrAccount)
        saveStorageAccount()
    }

    StorageAccount.forEach(item => {
        if (item.CheckOnline === true) {
            boxAccount.innerHTML = `  
            <a class="logout" onclick="Logout()">Đăng xuất</a>`
            if (item.Gmail === "admin@gmail.com" && item.Password === "123") {
                Clock.classList.remove("none")
            }
        }

    })
}
initAccount()

Logout = function () {
    StorageAccount.forEach(item => {
        if (item.CheckOnline) {
            item.CheckOnline = false
            saveStorageAccount()
        }
    })
    location.reload()
}

function saveStorageAccount() {
    localStorage.setItem('ListAccount', JSON.stringify(StorageAccount))
}





const navbarToggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('nav');

function toggleNav() {
  navbarToggle.classList.toggle('nav-open');
  nav.classList.toggle('nav-open');
}

navbarToggle.addEventListener('click', toggleNav);