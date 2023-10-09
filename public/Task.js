document.querySelector(".newtaskbtn").addEventListener("click",()=>{
    document.querySelector(".taskdiv").classList.remove("hidden")
})

document.querySelector(".cancelbtn").addEventListener("click",()=>{
    document.querySelector(".taskdiv").classList.add("hidden")
})
// format date and time
function formatDate(date) {
    const day = ('0' + date.getDate()).slice(-2);
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
  
    return ` ${day} ${month}, ${hours}.${minutes}`;
  }
  
  // Helper function to format datetime
  function formatDatetime(inputDatetime) {
      const date = new Date(inputDatetime);
      return formatDate(date);
  }
  
  document.querySelector(".savebtn").addEventListener("click", () => {
      const summary = document.querySelector(".summary");
      const datetime = document.querySelector(".datetime");
  
      if (summary.value === "" || datetime.value === "") {
          alert("Please add summary and datetime for the task.");
          return;
      }
  
      const formattedDatetime = formatDatetime(datetime.value);
  
      const incompletetask = document.querySelector(".incompletetask");
  
      const newtask = document.createElement("li");
      newtask.innerHTML = `
      <div class="w-[342px] h-[45px] flex flex-row gap-3 mt-[20px]  ">
      <div><input type="checkbox"
              class=" chkbox w-[24px] h-[24px] border-[2px] border-[#DADADA] rounded-[6px] bg-gray-300">
      </div>
      <div>
          <h3 class="w-[302px] h-[24px] text-[18px] text-[#575767] font-normal">${summary.value}</h3>
          <p class="w-[102] h-[17px] text-[14px] text-[#B9B9BE]"> ⏰ ${formattedDatetime}</p>
      </div>
  </div>
      `;
  
      incompletetask.appendChild(newtask);
  
      summary.value = "";
      datetime.value = "";
  
      document.querySelector(".taskdiv").classList.add("hidden");
      saveData();
  });
  
 
  
  
  
function formatDatetime(inputDatetime) {
    const options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
    const date = new Date(inputDatetime);
    return date.toLocaleString('en-US', options);
}
//move task from incomplete to complete task

const incompletetask = document.querySelector(".incompletetask");
const completetask = document.querySelector(".completetask");

incompletetask.addEventListener("click", (event) => {
    let listItem = event.target.closest("li");
  
    if (event.target.type === "checkbox" && event.target.checked) {
      const listItemClone = listItem.cloneNode(true);
      const clonedCheckbox = listItemClone.querySelector('.chkbox'); // Select the checkbox in the cloned item
      clonedCheckbox.disabled = true; // Disable the checkbox
      clonedCheckbox.setAttribute('checked', 'checked'); // Check the checkbox
  
      completetask.appendChild(listItemClone);
      incompletetask.removeChild(listItem);
       
  
      saveData();
    }
  });
  
  
//    completetask.forEach(element => {
//      element.innerHTML=""
//     saveData()
//    });

  

//Location panel hre
document.querySelector(".locatoinbtn").addEventListener("click",()=>{
    window.location.href="Location.html"
})


//Logout page href
document.querySelector(".logoutbtn").addEventListener("click",()=>{
    window.location.href="Login.html"
})

function saveData(){
    localStorage.setItem("uncompletelist",incompletetask.innerHTML)
    localStorage.setItem("completelist",completetask.innerHTML)
}
function showData(){
    incompletetask.innerHTML=localStorage.getItem("uncompletelist")
    completetask.innerHTML=localStorage.getItem("completelist")
}
showData()





