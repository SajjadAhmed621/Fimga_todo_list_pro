function Findmyloc() {
    let curloc = document.querySelector(".currentloc");
    let pre_location = document.querySelector(".prelocation");

    const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geoApiurl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

        fetch(geoApiurl)
            .then((res) => res.json())
            .then((data) => {
                if (data.principalSubdivision && data.countryName && data.city) {
                    const city = data.city;
                    const province = data.principalSubdivision;
                    const country = data.countryName;
                    const locationText = ` 📍 ${city}, ${province}, ${country}`;

                    // Create a new list item
                    const listItem = document.createElement("li");
                    listItem.textContent = locationText;
                

                    // Append the new location to the pre_location list
                    pre_location.appendChild(listItem);
                    listItem.className = 'w-[342px] h-[45px] mt[20px] text-[18px] text-[#575767] font-semibold ';


                    // Update the current location display
                    curloc.innerHTML = locationText;

                    saveData()
                }
            });
    };

    const error = () => {
        curloc.innerHTML = `Unable to search your current location`;
    }

    navigator.geolocation.getCurrentPosition(success, error);
}


document.querySelector(".addloc").addEventListener("click", Findmyloc);

document.querySelector(".logoutbtn").addEventListener("click",()=>{
    window.location.href="Login.html"
})

document.querySelector(".taskpnl").addEventListener("click",()=>{
    window.location.href="Task.html"
})

let pre_location = document.querySelector(".prelocation");
 function saveData(){
   pre_location=localStorage.setItem("saveloc",pre_location.innerHTML)
 }
 function showData(){
    pre_location.innerHTML=localStorage.getItem("saveloc")
 }
 showData()