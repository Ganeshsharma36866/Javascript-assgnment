step2froshow();
function step2vali() {

    let select2 = document.getElementById("Select2").value;
    if (select2 == "") {
        alert("Please Select any value");
        document.getElementById("Select2").style.borderColor = "red";
        return false;
    }
    else {
        mealarry = [];
        document.getElementById("step2").onclick = function () { location.href = "step3.html" }
        let stpe2value = document.getElementById("Select2").value;
        mealarry = JSON.parse(localStorage.getItem("meal"))
        //if (mealarry[1] == " ") {
        for (let i = 0; i < mealarry.length; i++) {
            mealarry[i].restauran = stpe2value;
            localStorage.setItem("meal", JSON.stringify(mealarry))
            //let dishesselectid=document.getElementById("dishesSelect3");    
        }
        // }
        // else {
        //   mealarry[1]=stpe2value;

        //}
    }
}
function step2froshow() {
    let sle2 = [];
    let jsonda = []
    sle2 = JSON.parse(localStorage.getItem("filter"))
    const ids = sle2.map(o => o.restaurant)
    const filtered = sle2.filter(({ restaurant }, index) => !ids.includes(restaurant, index + 1))
    let selstep2 = document.getElementById("Select2");
    let res = ` <option value="">Select</option>`;
    console.log(filtered);
    for (let i = 0; i < filtered.length; i++) {
        res += `<option value="${filtered[i].restaurant}">${filtered[i].restaurant}</option>`
    }
    //console.log([...new Set(res)].join(""));
    selstep2.innerHTML = res;

}
function prevstep2() {
    document.getElementById("step2previous").onclick = function () { location.href = "Restro.html" }
}