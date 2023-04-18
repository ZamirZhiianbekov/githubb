const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const btn = document.querySelector(".btn")
const ul = document.querySelector(".list")
const form = document.querySelector(".form-group")
const h1 = document.querySelector(".h1")
const delBtn = document.querySelector(".del-btn")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (firstName.value === "" || lastName.value === "") {
        h1.innerHTML = "404"
    } else {
        h1.innerHTML = ""
        ul.innerHTML +=
            `<li style="width: 90%" class="list-group-item col-4 max-auto d-flex justify-content-between align-items-center m-1">
               <span>${firstName.value}</span>
               <span>${lastName.value}</span>
               <button class="del-btn btn btn-danger m-2">delete</button>
             </li>`
        firstName.value = ""
        lastName.value = ""
    }
})


















// function view() {
//     const task = JSON.parse(localStorage.getItem("firstName")) || []
//     firstName.map((el) => {
//         ul.innerHTML +=
//             `<li style="width: 90%" class="list-group-item col-4 max-auto d-flex justify-content-between align-items-center m-1">
//                <span>${el.value}</span>
//                <span>${el.value}</span>
//                <button class="del-btn btn btn-danger m-2">delete</button>
//              </li>`
//     })
//
// }
// view()
//
//
//
// btn.addEventListener("click", () => {
//     const task = JSON.parse(localStorage.getItem("firstName")) || []
//     const newTask = {
//         id:1,
//         title:firstName.value
//     }
//     const result = [...task, newTask]
//     localStorage.setItem("task", JSON.stringify(result))
//
//     view()
// })









// btn.addEventListener("click",(e) => {
//     e.preventDefault()
//     if (firstName.value === "") {
//         h1.innerHTML = "404"
//     } else {
//         h1.innerHTML = ""
//         ul.innerHTML +=
//             `<li style="width: 90%" class="list-group-item col-4 mx-auto d-flex justify-content-between  align-items-center text-start mt-2">
//                <span>
//                 ${firstName.value}
//                </span>
//                <span>
//                ${lastName.value}
//                 </span>
//                 <button class="delBtn del-btn btn btn-danger">delete</button>
//              </li>`
//         firstName.value = ""
//         lastName.value = ""
//     }
// })


ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
        e.target.parentNode.remove()
    }
})






















// btn.addEventListener("click",(e) => {
//     e.preventDefault()
//     ul.innerHTML +=
//         `<li class="list-group-item my-1 d-flex justify-content-between">
//          ${firstName.value}
//          ${lastName.value}
//          <p>delete</p>
//          </li>`
// })





