const resources = [
    {ownedFood : 200, Foodmax : 50, ownedWood : 1000, Woodmax : 50, ownedStone : 1000, Stonemax : 50, ownedGold : 1000, Goldmax : 50},
]

const people = [
    {SetlerNumber : 0,FarmerNumber : 0,WoodmanNumber : 0, MinerNumber : 0},
]

const building = [
    {Farmlvl : 1, Forestlvl : 1, Quarrylvl : 1},
]

haveGranary = false
dupa = 20

function updatefood() {
    var currentfood = document.getElementById('food-owned')
    currentfood.textContent = resources[0].ownedFood + " żywności"
}

function updatewood() {
    var currentWood = document.getElementById('wood-owned')
    currentWood.textContent = resources[0].ownedWood + " drewna"
}

function updatestone() {
    var currentStone = document.getElementById('stone-owned')
    currentStone.textContent = resources[0].ownedStone + " kamienia"
}

function updategold() {
    var currentgold = document.getElementById('gold-owned')
    currentgold.textContent = resources[0].ownedGold + ' złota'
}

function startgame() {
    var name = prompt("Choose your town's name")
    var name1 = document.getElementById('townName')
    name1.textContent = name
    updatefood()
    updatewood()
    updatestone()
    updategold()  
}

function farmClick() {
    if(resources[0].ownedFood  < resources[0].Foodmax) {
    resources[0].ownedFood  += building[0].Farmlvl
    updatefood()
    } else {
    console.log("nie") }
}   

function forestClick() {
    if (resources[0].ownedWood < resources[0].Woodmax){
    resources[0].ownedWood += building[0].Forestlvl
    updatewood()}
    else {
    console.log("nie") }
}

function quarryClick() {
    if (resources[0].ownedStone < resources[0].Stonemax){
    resources[0].ownedStone += building[0].Quarrylvl
    updatestone()}
    else {
    console.log("nie")
    }
}

function AddSetler() {
    if(resources[0].ownedFood >= 20 + (people[0].SetlerNumber * 5)) {
        resources[0].ownedFood -= 20 + (people[0].SetlerNumber * 5)
        updatefood()
        people[0].SetlerNumber += 1
        var currentSetler = document.getElementById('population')
        currentSetler.textContent = people[0].SetlerNumber + " ludzi"
        console.log(haveGranary)
    }
}

function AddFarmer() {
    if(resources[0].ownedGold >= 25 && people[0].SetlerNumber > people[0].FarmerNumber + people[0].WoodmanNumber + people[0].MinerNumber) {
        resources[0].ownedGold -= 25
        updategold()
        people[0].FarmerNumber += 1
        var currentFarmer = document.getElementById('FarmerNumber')
        currentFarmer.textContent = people[0].FarmerNumber + " rolników"
    }
}

function AddWoodman() {
    if(resources[0].ownedGold >= 25 && people[0].SetlerNumber > people[0].WoodmanNumber + people[0].MinerNumber + people[0].FarmerNumber) {
        resources[0].ownedGold -= 25
        updategold()
        people[0].WoodmanNumber += 1
        var currentWoodman = document.getElementById('WoodmanNumber')
        currentWoodman.textContent = people[0].WoodmanNumber + " drwali"
    }
}

function AddMiner() {
    if(resources[0].ownedGold >= 25 && people[0].SetlerNumber > people[0].WoodmanNumber + people[0].MinerNumber + people[0].FarmerNumber) {
        resources[0].ownedGold -= 25
        updategold()
        people[0].MinerNumber += 1
        var currentMiner = document.getElementById('MinerNumber')
        currentMiner.textContent = people[0].MinerNumber + " górników"
    }
}

function Clickerupgrade(x) {
    if (x == 1){
        if(resources[0].ownedGold >= 100 && building[0].Farmlvl == 1 && people[0].FarmerNumber >= 5) {
            resources[0].ownedGold -= 100
            clickerlvl(1)
                return
        }
        if(resources[0].ownedGold >= 200 && building[0].Farmlvl == 2 && people[0].FarmerNumber >= 10) {
            resources[0].ownedGold -= 200
            clickerlvl(1)
                return
        }
        if(resources[0].ownedGold >= 500 && building[0].Farmlvl == 3 && people[0].FarmerNumber >= 15) {
            resources[0].ownedGold -= 500
            clickerlvl(1)
                return
        }
    }
    if (x == 2){
        if(resources[0].ownedGold >= 100 && building[0].Forestlvl == 1 && people[0].WoodmanNumber >= 5) {
            resources[0].ownedGold -= 100
            clickerlvl(2)
                return
        }
        if(resources[0].ownedGold >= 200 && building[0].Forestlvl == 2 && people[0].WoodmanNumber >= 10) {
            resources[0].ownedGold -= 200
            clickerlvl(2)
                return
        }
        if(resources[0].ownedGold >= 500 && building[0].Forestlvl == 3 && people[0].WoodmanNumber >= 15) {
            resources[0].ownedGold -= 500
            clickerlvl(2)
                return
        }
    }
    if (x == 3){
        if(resources[0].ownedGold >= 100 && building[0].Quarrylvl == 1 && people[0].MinerNumber >= 5) {
            resources[0].ownedGold -= 100
            clickerlvl(3)
                return
        }
        if(resources[0].ownedGold >= 200 && building[0].Quarrylvl == 2 && people[0].MinerNumber >= 10) {
            resources[0].ownedGold -= 200
            clickerlvl(3)
                return
        }
        if(resources[0].ownedGold >= 500 && building[0].Quarrylvl == 3 && people[0].MinerNumber >= 15) {
            resources[0].ownedGold -= 500
            clickerlvl(3)
                return
        }

    }    
}

function clickerlvl(x){
    if(x == 1){
        updategold()
        building[0].Farmlvl += 1
        var currentfarmlvl = document.getElementById('farm')
        currentfarmlvl.textContent = 'Poziom ' + building[0].Farmlvl}
    if(x == 2) {
        building[0].Forestlvl += 1
        updategold()
        var currentforestlvl = document.getElementById('forest')
        currentforestlvl.textContent = 'Poziom ' + building[0].Forestlvl}
    if(x == 3) {
        building[0].Quarrylvl += 1
        updategold()
        var currentquarrylvl = document.getElementById('quarry')
        currentquarrylvl.textContent = 'Poziom ' + building[0].Quarrylvl}

}

function Sellresources(x) {
    if(resources[0].ownedFood >= 50 && x == 1){
        resources[0].ownedFood -= 50
        resources[0].ownedGold += 1
        updatefood()
        updategold()}
    if(resources[0].ownedFood >= 50 && x == 2){
        resources[0].ownedWood -= 50
        resources[0].ownedGold += 1
        updatewood()
        updategold()}
    if(resources[0].ownedFood >= 50 && x == 3){
        resources[0].ownedStone -= 50
        resources[0].ownedGold += 1
        updatestone()
        updategold()}        

}

function Granary() {
    if (resources[0].ownedGold >= 50 && people[0].SetlerNumber >= 5) 
        resources[0].ownedGold -= 50
        updategold()
        resources[0].Foodmax = 250
        haveGranary = true  
}

function Storagebuild(x) {
    if (resources[0].ownedGold >= 50 && x == 1) {
        resources[0].ownedGold -= 50
        updategold()
        resources[0].Woodmax = 200}
    if (resources[0].ownedGold >= 50 && x == 2){
        resources[0].ownedGold -= 50
        updategold()
        resources[0].Stonemax = 200}
    if (resources[0].ownedGold >= 50 && x == 3){
        resources[0].ownedGold -= 50
        updategold()
        resources[0].Goldmax = 200}
}

function Storageupgrade(x) {
    if(resources[0].ownedGold >= 500 && x == 1) {
    resources[0].Woodmax = 200
    updategold()}
    if(resources[0].ownedGold >= 500 && x == 2) {
    resources[0].Stonemax = 200
    updategold()}
    if(resources[0].ownedGold >= 500 && x == 3){
    resources[0].Goldmax = 200
    updategold()}
}   

