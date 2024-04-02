class Player{
    constructor(nickName, score){
        this.nickName = nickName;
        this.score = score;
    }
getInfo(){
    return console.log(`${this.nickName}'s score is ${this.score}`);
}

attack(attackingPlayer, attackedPlayer){
attackingPlayer.score++ ;
attackedPlayer.score--;
}

damage(playerWithDamage){
    playerWithDamage.score--;  
}

}



class SuperPlayer extends Player{
    constructor()
}