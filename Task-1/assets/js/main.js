
let name = document.querySelector("#name");
let surName = document.querySelector("#surname");
let salary = document.querySelector("#salary");

let userForm = document.querySelector("#user-form");
let userList = document.querySelector("#user-list");
let error = true;

name.addEventListener("blur", (e) => validation(e.target));
surName.addEventListener("blur", (e) => validation(e.target));
salary.addEventListener("blur", (e) => validation(e.target));
userForm.addEventListener("submit", addUser);


// formu submit edende eger inputlar bosdursa validation messagelari gostersin
function checkValidationAllInputs() {
  const inputs = bookForm.querySelectorAll("input");
  inputs.forEach((inp) => validation(inp));
}

function validation(inp) {
  if (inp.value != "") {
    inp.className = "form-control is-valid";
    error = false;
  } else {
    error = true;
    inp.className = "form-control is-invalid";
    inp.nextElementSibling.className = "invalid-feedback";
    inp.nextElementSibling.textContent = "Field can't be left blank";
  }
}

function addUser(e) {
  e.preventDefault();

  if (error) {
    checkValidationAllInputs()
    return;
  }

  userList.innerHTML += `
    <tr>
        <td>
            <input  class="form-control" disabled type="text" value="${name.value}">
        </td>
        <td>
            <input  class="form-control" disabled type="text" value="${surName.value}">
        </td>
        <td>
            <input  class="form-control" disabled type="text" value="${salary.value}">
        </td>
        <td class="d-flex">
            <button type="button" id="removeUser" onclick="removeUser(event)" class="btn btn-danger">Remove</button>
            <button type="button" id="editUser" onclick="editUser(event)" class="btn btn-primary mx-3">Edit</button>
        </td>
    </tr>
    `;

  resetForm();
}

function resetForm() {
  // data doma elave olunandan sonra is-success classini silek
  userForm
    .querySelectorAll("input")
    .forEach((inp) => { 
      inp.classList.remove("is-valid");
    })

  
  bookForm.reset();

  // yeniden validation functionlarimiz islemesi ucun true edek
  error = true;
}

function removeUser(e) {
  let removeBtn = e.target;
  removeBtn.parentElement.parentElement.remove();
}

function editUser(e) {
  let bookRow = e.target.parentElement.parentElement;
  let inputs = bookRow.querySelectorAll("input");

  inputs.forEach((inp) => {
    let disabledInp = inp.getAttribute("disabled");

    console.log(disabledInp);

    if (disabledInp != "" && disabledInp == null) {
      inp.setAttribute("disabled", "disabled");
    } else {
      inp.removeAttribute("disabled");
    }
  });
}
function isNumberKey(evt) {
  var charCode = (evt.which) ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
  return true;
}
