import Grub from './Grub'

//Bee class is being extended from Grub
class Bee extends Grub {
  constructor() {
    super();
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
}

export default Bee;