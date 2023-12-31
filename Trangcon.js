var ArrPost = []
var StorageAccount = []
var boxAccount = document.querySelector('.BoxLogin')
var Clock = document.querySelector('.Clock')
var boxPost = document.querySelector('.box-post')


function isImageFile(file) {
    const allowedExtensions = ["jpeg", "jpg", "png", "gif", "bmp", "tiff"];
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
}

function initAccount() {
    const data = JSON.parse(localStorage.getItem('ListAccount'))
    if (data !== null) {
        data.forEach((item) => {
            StorageAccount.push(item)
        })
    }
    const Data = JSON.parse(localStorage.getItem('StoragePost'))
    if (Data !== null) {
        Data.forEach((item) => {
            ArrPost.push(item)
        })
    }

    StorageAccount.forEach(item => {
        if (item.CheckOnline === true) {
            // <p class="username">${item.Username}</p>
            boxAccount.innerHTML = `  
            <a class="logout" onclick="Logout()">Đăng xuất</a>`
            if (item.Gmail === "admin@gmail.com" && item.Password === "123") {
                Clock.classList.remove("none")
            }
        }
    })

    var Arrpost = ArrPost.reverse()

    Arrpost.forEach(item => {

        const fileName = item.Image;
        const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"];
        const fileExtension = fileName.slice(-4).toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            console.log(fileName, "Đây là một tệp ảnh!");
            boxPost.innerHTML += `
            <div class="row item-3-content">
            <div class="col l-6 m-6 c-12 item-3-content-img">
                <img class="imgNewhethy" src="${item.Image}" alt="">
            </div>
            <div class="col l-6 m-6 c-12">
                <p class="item-3-content-title">${item.Title}</p>
                <p class="item-3-content-time">Ngày đăng: ${item.Date}</p>
                <div class="item-3-content-notifi">${item.Content}
                </div>
            </div>
        </div>`
        } else {
            console.log(fileName, "Đây không phải là một tệp ảnh!");
            boxPost.innerHTML += `
            <div class="row item-3-content">
            <div class="col l-6 m-6 c-12 item-3-content-img">
                 <video class="imgNewhethy" controls>                
                 <source src="${item.Image}" type="video/mp4"> 
                 </video>
            </div>
            <div class="col l-6 m-6 c-12">
                <p class="item-3-content-title">${item.Title}</p>
                <p class="item-3-content-time">Ngày đăng: ${item.Date}</p>
                <div class="item-3-content-notifi">${item.Content}
                </div>
            </div>
        </div>`
        }

        // if (isImageFile(file)) {
        //     console.log("Đây là một tệp ảnh!");
        // } else {
        //     console.log("Đây không phải là một tệp ảnh!");
        // }


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