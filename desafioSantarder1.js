function acontece(array,qtdMinima){
  var alunosNoHorario = 0
  for (var i = 0; i < array.length; i ++){
    if(array[i] <= 0) {
      alunosNoHorario++
    }
  }
  if (alunosNoHorario === qtdMinima){
    return true
  }
  else{
    return false
  }
}
//console.log(acontece([10, 5, 3, 0],1))