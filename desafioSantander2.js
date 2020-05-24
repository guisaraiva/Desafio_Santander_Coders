var alunosDaSegunda = [10, -5, 3, 0]
var alunosDaTerca = [20, 5 , 0 , 0]

function aberturas(array){
  var qtdAlunosNoHorario = []
  var qtdAlunosNaSala = []
  
  function alunosNoHorario (horario){
    return horario <= 0
  }
  for (var i = 0; i < array.length; i++){
    for (var x = 0; x < array[i].length; x++)
    qtdAlunosNoHorario[i] = array[i].filter(alunosNoHorario)
    qtdAlunosNaSala.push(qtdAlunosNoHorario[i].length)
  }
  return qtdAlunosNaSala
  
}
console.log(aberturas([alunosDaSegunda, alunosDaTerca]))

