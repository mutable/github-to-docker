var report = function(request){
  if(request.took > 200)
    console.error(request.method + ' ' + request.path + ' ' + request.took + ' === SLOW ===' )
}

module.exports = report