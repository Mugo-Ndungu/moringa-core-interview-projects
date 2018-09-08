function pingpong(num){
  if(num > 0){
    for(var i = 1; i <= num; i ++){
      if (i % 5 ==0 && i % 3 == 0){
        console.log("Pingpong");
      } else if( i % 3 == 0){
        console.log("Ping");
      } else if(i % 5 ==0){
        console.log("Pong");
      }else{
        console.log(i);
      }
    }
  }
}

pingpong(100);