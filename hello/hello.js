var Hello = (function () {
    function Hello(hello) {
        this.hello = hello;
    }
    Hello.prototype.world = function () {
        return "<h1>" + this.hello + "</h1>";
    };
    Hello.test = function () {
        return 'just test';
    };
    return Hello;
}());
var hh = new Hello('Hello world');
document.body.innerHTML = hh.world();
console.log(Hello.test());
//console.log(document.getElementById('test'));
//document.getElementById('test').innerHTML = Hello.test();
//# sourceMappingURL=hello.js.map