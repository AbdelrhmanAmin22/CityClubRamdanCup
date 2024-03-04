// My Variables 
let navBar = document.getElementById('navBar')
let mobileMenu = document.getElementById('mobileMenu')
let links = document.getElementById('links')
let menu = document.getElementById('menu')
let CloseMenu = document.getElementById('Close')

// Set initial display properties based on window width
if (window.innerWidth > 800) {
    mobileMenu.style.display = 'none'
    links.style.display = 'flex'
} else {
    mobileMenu.style.display = 'block'
    links.style.display = 'none'
}
// toogle links with menu bar
// intaial condation for nav 
if(window.innerWidth > 800) {
    navBar.style.flexDirection = 'row-reverse'
}
else{
    navBar.style.flexDirection = 'row'
}
window.addEventListener('resize', (e) => {
    if (e.target.innerWidth > 800) {
        mobileMenu.style.display = 'none'
        links.style.display = 'flex'
        navBar.style.flexDirection = 'row-reverse'
    } else {
        mobileMenu.style.display = 'block'
        links.style.display = 'none'
        navBar.style.flexDirection = 'row'
    }
});
// menu options 
mobileMenu.addEventListener('click', ()=> {
    menu.classList.toggle('hideMenu')

})

CloseMenu.addEventListener('click', ()=> {
    menu.classList.add('hideMenu')
})

// go to top of page 
let topBtn = document.getElementById('topBtn')

window.addEventListener('scroll', ()=>{
    if(window.scrollY < 150) {
        topBtn.classList.add('displayTopBtn')
    }
    else {
        topBtn.classList.remove('displayTopBtn')
    }
})

topBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// loading screen 

    let loaderContainer = document.querySelector('.loader-container');
    setTimeout(()=>{
        loaderContainer.style.display = 'none'; 
        document.body.style.overflow = 'visible'; 
    }, 2500)

// form handle 
let myForm = document.getElementById("myForm")

function isValidEmail(email) {
    return email.includes("@");
}
myForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let branch = document.getElementById("branch").value;
    let type = document.getElementById("type").value;
    let message = document.getElementById("m").value;
    
    if (name.trim() === "") {
        alert("يرجى إدخال الاسم");
        return;
    }

    if (phoneNumber.trim() === "") {
        alert("يرجى إدخال رقم الهاتف");
        return;
    }
    if (message.trim() === "") {
        alert("يرجى إدخال محتوي الرسالة ");
        return;
    }
    
    if (!isValidEmail(email)) {
        alert("البريد الإلكتروني غير صحيح");
        return;
    }

    let formData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        branch: branch,
        type: type,
        message: message
    };

    console.log(formData);
    alert("تم استقبال طلبك بنجاح ");
});

