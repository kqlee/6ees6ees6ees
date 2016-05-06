import Bee from './Bee'

class ForagerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.honeyPot = 0;
    this.treasureChest = [];
    this.forage = (treasure) => {
      this.treasureChest.push(treasure);
    } 
  }
};

export default ForagerBee;