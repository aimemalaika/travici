const selecttab = () => {
  document.querySelector('.accountdet').classList.toggle("hidden");
  document.querySelector('.accountsetting').classList.toggle("hidden");
  let menup = document.querySelectorAll('.setpointer');

  for (let index = 0; index < menup.length; index++) {
    menup[index].classList.toggle("activate");
  }
}

const filterResult = () => {
  let input = document.getElementById("searchinput");
  let filter = input.value.toUpperCase();
  let table = document.getElementById("diary-table");
  let tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      let txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

const togglealertdelete = () => {
  document.querySelector('#pop-up-delete').classList.toggle('hidden');
  document.querySelector('html').classList.toggle('noscroll');
}

const togglemenu = () => {
  document.querySelector('#phone-menu').classList.toggle('hidden');
}