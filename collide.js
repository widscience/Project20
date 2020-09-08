function collide(ob1, ob2){
    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2) {
        ob1.velocityX = 0;
  }
}