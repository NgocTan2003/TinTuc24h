var title = document.querySelector('.title')
var author = document.querySelector('.author')
var content = document.querySelector('.content')
var selectElement = document.querySelector('#my-combobox')
var image = document.querySelector('input[type="file"]');
var t = document.querySelector('#preview')
var StorageAccount = []
var boxAccount = document.querySelector('.BoxLogin')
// var Clock = document.querySelector('.Clock')
var url = ""
var file = ""
var ArrImage = [
    {
        nameImg: "Giaoduc1.jpg",
        urlImage: "./access/Image/Giaoduc/Giaoduc1.jpg"
    }, {
        nameImg: "Giaoduc2.jpg",
        urlImage: "./access/Image/Giaoduc/Giaoduc2.jpg"
    }, {
        nameImg: "Giaoduc3.jpg",
        urlImage: "./access/Image/Giaoduc/Giaoduc3.jpg"
    }, {
        nameImg: "Giaoduc4.jpg",
        urlImage: "./access/Image/Giaoduc/Giaoduc4.jpg"
    }, {
        nameImg: "Giaoduc5.jpg",
        urlImage: "./access/Image/Giaoduc/Giaoduc5.jpg"
    }, {
        nameImg: "dekhaosattotnghiep_2023_VTV24.mp4",
        urlImage: "./access/Image/Video/dekhaosattotnghiep_2023_VTV24.mp4"
    }, {
        nameImg: "lophocchatluongcaootrungtamgiaoducthuongxuyen_VTV24.mp4",
        urlImage: "./access/Image/Video/lophocchatluongcaootrungtamgiaoducthuongxuyen_VTV24.mp4"
    }

]

// ktra file tai len va file co san
image.addEventListener('change', () => {
    file = image.files[0];
    ArrImage.forEach(i => {
        if (i.nameImg === file.name) {
            url = i.urlImage
        }
    })
});

var submit = document.querySelector('.submit')
var ArrPost = []

submit.onclick = function () {
    var cbbValue = selectElement.options[selectElement.selectedIndex].value;

    if (title.value !== "" && author.value !== "" && cbbValue !== "" && content.value !== "" && image.files[0].name !== "") {
        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth() + 1;
        var year = today.getFullYear();
        var datetime = day + '/' + month + '/' + year;

        var Post = {
            Title: title.value,
            Author: author.value,
            Image: url,
            CbbValue: cbbValue,
            Date: datetime,
            Content: content.value
        }
        ArrPost.push(Post)
        localStorage.setItem('StoragePost', JSON.stringify(ArrPost))
        alert("Đăng bài thành công!")
        location.reload()
    } else {
        alert("Hãy điền đầy đủ thông tin!")
    }

}

function initAccount() {
    const data = JSON.parse(localStorage.getItem('ListAccount'))
    if (data !== null) {
        data.forEach((item) => {
            StorageAccount.push(item)
        })
    }

    const posts = JSON.parse(localStorage.getItem('StoragePost'))
    if (posts !== null) {
        posts.forEach((item) => {
            ArrPost.push(item)
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