
let selectedarray = [];
let finalarray = [];
let disn = [];
let disserv = {};
let dishninsert = [];
let data = [];
let getdishname = [];
let coutn = 1;
document.getElementById("increment").addEventListener("click", (e) => {
    e.preventDefault()
    let seletadd = document.getElementById("addselect");
    //let selectstep3 = document.getElementById("dishesSelect3").value;
    dishesname = JSON.parse(localStorage.getItem("meal"))
    let Serving = document.getElementById("Serving");
    let serving1 = " "
    let field = " ";
    // for (var i = 0; i < data.length; i++) {
    //console.log("i === data.length ", i == data.length - 1)
    if (coutn == data.length) {
        document.getElementById("increment").setAttribute("disabled", "disabled")
    } else {
        let dishes3 = document.getElementById("dishes3").value;
        let serving3 = document.getElementById("Serving3")
        const filte=data.filter(data=>{
            return selectedarray.filter(filter=>{
                
            })
        })
        //console.log(data)
        for (let i = 0; i < data.length; i++) {
            field = `<select class="form-control" id="dishes3" style="border-radius: 100px;" >
            <option value="">Select</option>
            <option value="${disserv[i].name}">${disserv[i].name}</option></select>`;
            serving1 = ` <select class="form-control" id="${Serving3}" style="border-radius: 100px;" >
            <option value="">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>`
        }
        disn = JSON.parse(localStorage.getItem("meal"))
        //disserv.Name = dishes3;
        //disserv.serving = serving3;
        //dishninsert.push(disserv);
        //disn[0].dis = (dishninsert)
        //localStorage.setItem("meal", JSON.stringify(disn)) 
    }
    coutn++;
    //}
    Serving.innerHTML += serving1;
    seletadd.innerHTML += field;
})
step3shwo();
function step3shwo() {
    let mealarry = [];
    //let getdishname = [];
    mealarry = JSON.parse(localStorage.getItem("meal"));
    getdishname = JSON.parse(localStorage.getItem("filter"));
    let dishesselectid = document.getElementById("dishesSelect3");
    let selec = `<option value="">Select</option>`;
    for (let i = 0; i < getdishname.length; i++) {
        if (mealarry[0].restauran == getdishname[i].restaurant) {
            data.push(getdishname[i].name)
            selec += `<option value="${getdishname[i].name}">${getdishname[i].name}</option>`
        }
    }
    dishesselectid.innerHTML = selec;
}
function prevstep3() {
    document.getElementById("step3previous").onclick = function () { location.href = "step2.html" }
}
function nextstep4() {

    let sel3 = document.getElementById("dishesSelect3").value;
    let ser = document.getElementById("Select3").value;
    if (sel3 == "" || ser == "") {
        alert("Please Select any value")
        return false;
    }
    else {
        document.getElementById("step3").onclick = function () { location.href = "step4.html" }
    }

}
function step3seletedarrya() {
    let sel3 = document.getElementById("dishesSelect3").value;
    let ser = document.getElementById("Select3").value;
    disn = JSON.parse(localStorage.getItem("meal"))
    //disserv.Name = sel3;
    selectedarray.push(sel3);
    console.log(selectedarray)
    //disserv.serving = ser;
    dishninsert.push(disserv);
    //disn[0].dis = (dishninsert)
    //localStorage.setItem("meal", JSON.stringify(disn))


}