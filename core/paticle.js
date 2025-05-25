class Particula {
    constructor(x, y, tipo = "eletron") {
      this.x = x;
      this.y = y;
      this.tipo = tipo;
      this.vx = 0;
      this.vy = 0;
    }
  
    atualizar() {
      this.x += this.vx;
      this.y += this.vy;
    }
  }
  
  module.exports = Particula;
  