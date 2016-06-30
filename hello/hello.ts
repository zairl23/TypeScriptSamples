class Hello {
    constructor(public hello: string){}

    world() {
        return "<h1>" + this.hello + "</h1>";
    }

    static test() {
        return 'just test';
    }
}

var hh = new Hello('Hello world');

document.body.innerHTML = hh.world();
console.log(Hello.test());
//console.log(document.getElementById('test'));
//document.getElementById('test').innerHTML = Hello.test();
