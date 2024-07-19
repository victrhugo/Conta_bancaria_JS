Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | `+
        `Saldo: ${this.saldo.toFixed(2)}`
    );

    function Cc(agencia, conta, saldo, limite) {
        Conta.call(this, agencia, conta, saldo);
        this.limite = limite;
    }

    Cc.prototype = Object.create(Conta.prototype);
    Cc.prototype.constructor = CC;
}

    CC.prototype.sacar =  function(valor) {
        if(valor > (this.saldo + this.limite)) {
            console.log(`Saldo insuficente: ${this.saldo}`);
            return;
        }
        this.saldo -= valor;
        this.verSaldo();
    };

    function CP(agencia, conta, saldo) {
        Conta.call(this, agencia, conta, saldo);
    }
    CP.prototype = Object.create(Conta.prototype);
    CP.prototype.constructor = CP;

        const CC = new CC(3750, 1353-8, 0);
        cc.depositar(10);
        cc.sacar(110);
        cc.sacar(1);

        console.log();

        const cp = new CP(1432, 4456-4, 0);
        cp.depositar(20);
        cc.sacar(10);
        cc.sacar(2);