function changeInputA() {
    const Container = document.getElementById("a");
    const Input = document.getElementById("input-a").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i <= Input; i += 25) {
        str += `<div class="wind-machine">
        <img class="wind-pole" src="../static/assets/wind-pole.png" alt="">
        <img class="wind-blades" src="../static/assets/wind-blades.svg" alt="">
      </div>`
    }
    Container.innerHTML = str;
}
function changeInputE() {
    const Container = document.getElementById("e");
    const Input = document.getElementById("input-e").value;
    Container.innerHTML = "";
    let str = ""
    let change = true;
    for (let i = -100; i < Input; i += 50) {
        if(change){
            str += `<div class="electric-vehicles">
            <img src="../static/assets/car-electric-left.png" alt="">
            <img src="../static/assets/car-electric-left.png" alt="">
            <img src="../static/assets/e-pump.png" alt="">
        </div>`
        }else{
            str += `<div class="electric-vehicles">
            <img src="../static/assets/car-electric-left.png" alt="">
            <img src="../static/assets/e-pump.png" alt="">
        </div>`
        }
        change = !change;
    }
    Container.innerHTML = str;
}

function changeInputG() {
    const Container = document.getElementById("g");
    const Input = document.getElementById("input-g").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i <= Input; i += 25) {
        str += `<div class="forest">
        <img class="tree-conifer" src="../static/assets/tree-conifer.png" alt="">
        <img class="tree-slim" src="../static/assets/tree-slim.png" alt="">
      </div>`
    }
    Container.innerHTML = str;
}

function changeInputB() {
    const Container = document.getElementById("b");
    const Input = document.getElementById("input-b").value;
    Container.innerHTML = "";
    let str = ""
    let change = true;
    for (let i = -100; i <= Input; i += 25) {
        if(change){
            str += `<img src="../static/assets/truck-green.png" alt="">`
        }else{
            str += `<img src="../static/assets/car-old.png" alt="">`
        }
        change = !change
    }
    Container.innerHTML = str;
}

function changeInputI() {
    const Container = document.getElementById("i");
    const Input = document.getElementById("input-i").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i < Input; i += 50) {
        str += `<div class="biogas-plant">
        <img class="biogas-plantImg" src="../static/assets/biogas-plant.png" alt="">
      </div>`
    }
    if (!str) str = `<div class="biogas-plant">
    <img class="biogas-plantImg" src="../static/assets/biogas-plant.png" alt="">
  </div>`
    Container.innerHTML = str;
}

function changeInputF() {
    const Container = document.getElementById("f");
    const Input = document.getElementById("input-f").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i < Input; i += 50) {
        str += `<div class="factory">
        <img class="factortImg" src="../static/assets/factory.png" alt="">
      </div>`
    }
    if (!str) str = `<div class="factory">
        <img class="factortImg" src="../static/assets/factory.png" alt="">
    </div>`
    Container.innerHTML = str;
}

function changeInputK() {
    const Container = document.getElementById("k");
    const Input = document.getElementById("input-k").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i < Input; i += 50) {
        str += `<div class="thermal-plant">
        <img class="factoryImg" src="../static/assets/factory-2.png" alt="">
      </div>`
    }
    if (!str) str = `<div class="thermal-plant">
    <img class="factoryImg" src="../static/assets/factory-2.png" alt="">
  </div>`
    Container.innerHTML = str;
}

function changeInputM() {
    const Container = document.getElementById("m");
    const Input = document.getElementById("input-m").value;
    Container.innerHTML = "";
    let str = ""
    let change = true;
    for (let i = -100; i <= Input; i += 50) {
        if (change) {
            str += `<div class="power-plant-nuclear">
            <img class="power-plant-nuclearImg" src="../static/assets/power-plant-nuclear-2.png" alt="">
          </div>`
        } else {
            str += `<div class="power-plant-nuclear">
            <img class="power-plant-nuclearImg" src="../static/assets/power-plant-nuclear-3.png" alt="">
          </div>`
        }
        change = !change
    }
    if (!str) str = `<div class="power-plant-nuclear">
        <img class="power-plant-nuclearImg" src="../static/assets/power-plant-nuclear-3.png" alt="">
    </div>`
    Container.innerHTML = str;
}
function changeInputL() {
    const Container = document.getElementById("l");
    const Input = document.getElementById("input-l").value;
    Container.innerHTML = "";
    let str = ""
    let change = true;
    for (let i = -100; i <= Input; i += 50) {
        if (change) {
            str += `<div class="building">
            <img class="buildingImg" src="../static/assets/building-blue-block.png" alt="">
          </div>`
        } else {
            str += `<div class="building">
            <img class="buildingImg" src="../static/assets/building-orange-tall.png" alt="">
          </div>`
        }
        change = !change
    }
    if (!str) str = `<div class="factory">
        <img class="buildingImg" src="../static/assets/building-blue-block.png" alt="">
    </div>`
    Container.innerHTML = str;
}

function changeInputD() {
    const Container = document.getElementById("d");
    const Input = document.getElementById("input-d").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i <= Input; i += 50) {
        str += `<img src="../static/assets/garbage.png" alt="">`
    }
    Container.innerHTML = str;
}

function changeInputC() {
    const Container = document.getElementById("c");
    const Input = document.getElementById("input-c").value;
    Container.innerHTML = "";
    let str = ""
    for (let i = -100; i <= Input; i += 50) {
        str += `<div class="panels">
          <img class="panelImg" src="../static/assets/solar-panel.png" alt="">
        </div>`
    }
    if (!str) str = `<div class="panels">
    <img class="panelImg" src="../static/assets/solar-panel.png" alt="">
  </div>`
    Container.innerHTML = str;
}

function changeInputH() {
    const Container = document.getElementById("h");
    const Input = document.getElementById("input-h").value;
    Container.innerHTML = "";
    let str = ""
    let change = true;
    for (let i = -100; i <= Input; i += 25) {
        if (change) {
            str += `<div class="populations">
            <img class="populationsImg" src="../static/assets/building-residential-1.png" alt="">
          </div>`
        } else {
            str += `<div class="populations">
            <img class="populationsImg" src="../static/assets/building-residential-2.png" alt="">
          </div>`
        }
        change = !change
    }
    if (!str) str = `<div class="populations">
    <img class="populationsImg" src="../static/assets/building-residential-1.png" alt="">
  </div>`
    Container.innerHTML = str;
}

