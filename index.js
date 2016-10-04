function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('#nested .target')
}


function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')
for (var i = 0; i < list.length; i++){
  var child = list[i].children

  for (var j = 0; j < child.length; j++){
    child[j].innerHTML = parseInt(child[j].innerHTML) + n
  }
}
}






function deepestChild(){
 var node = document.querySelector('#grand-node').querySelectorAll('div')
 return node[node.length - 1] 
}
