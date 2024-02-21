function createMaterial(mat, unit, price){
  var material = {
    name: mat,
    unit: unit,
    costPerUnit: price
  }
  return material
}

function calculateMaterialCost(mat, units){
  var price = mat.costPerUnit * units
  return `${units} ${mat.unit}s of ${mat.name} costs $${price}.`
}

function createSupplyCloset(supplies){
  var list = []
  if (supplies !== undefined) {
    for (var i = 0; i < supplies.length; i++) {
      list.push(supplies[i].name)
    }
    return {supplies: list} 
  } else {
    return {supplies: []}
  }
}

function addSupply(closet, stuff) {
  for (var i = 0; i < closet.supplies.length; i++){
    if (closet.supplies[i].includes(stuff.name)){
      return 'You already have fabric in your closet!'
    } else {
      closet.supplies.push(stuff.name)
      return closet.supplies 
    }
  }
}

function createNewProject(mat, status){
  
  if (status !== undefined) {
  var proj = {
    materialsNeeded: mat,
    status: status
  }
  return proj 
  } else {
    return { 
      materialsNeeded: mat,
      status: 'not started' }
  }
}

function compareMaterials(need, have) {
  for (var i = 0; i < need.materialsNeeded.length; i++) {
    if (have.supplies.includes(need.materialsNeeded[i].name)){
      return 'Yay! You can start this project!'
    } else {
      return 'Oh no! You need to go shopping before you can start this project!'
    }
  }
}

var paper = createMaterial('paper', 'ream', 13.99);
var paint = createMaterial('paint', 'bottle', '4.50');

var materials = [paper, paint];

var mySupplies = createSupplyCloset(materials);

var paintProject = createNewProject(materials);

var check = compareMaterials(paintProject, mySupplies);

console.log(paintProject.materialsNeeded.length)
console.log(check)


module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}