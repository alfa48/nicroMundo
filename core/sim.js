const Particula = require('./paticle');

class Simulador {
  constructor() {
    this.particulas = [];
  }

  adicionar(p) {
    this.particulas.push(p);
  }

  simular() {
    for (let p of this.particulas) {
      p.atualizar();
    }
  }

  obterEstado() {
    return this.particulas.map(p => ({
      x: p.x,
      y: p.y,
      tipo: p.tipo
    }));
  }
}

module.exports = Simulador;
