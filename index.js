var current_number = 0

function takeANumber(katzDeli, current_number){
  current_number +=1;
  katzDeli.push(current_number);
  return "You are number "+ current_number +" in line.";
}

function nowServing(katzDeli){
  if(katzDeli.length >0){
    var serving =  katzDeli[0]
    katzDeli.shift();
    return "Currently serving "+serving+".";
  }else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katzDeli){
  var order = "The line is currently: "
  if(katzDeli.length >0){
    for(var x = 0; x< katzDeli.length; x++){
      if(x != katzDeli.length-1){
        order = order + (x+1) +". " + katzDeli[x] + ", "; 
      }else{
        order = order + (x+1) +". " + katzDeli[x]; 
      }
    }
    
    return order;
    
  }else{
    return "The line is currently empty.";
  }
}
