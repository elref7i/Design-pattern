function Click() {
  this.handler = [];
  console.log(this);
}

Click.prototype = {
  subscribe: function (fn) {
    this.handler.push(fn);
  },
  unSubscribe: function (fn) {
    this.handler = this.handler.filter((item) => item != fn);
  },
  fire: function (inp) {
    this.handler.forEach((item) => item.call(widow, inp));
  },
};

function clickHandle() {
  console.log("refai");
}

const x = new Click();

x.subscribe(clickHandle);
x.fire("Ahmed refai");
x.unSubscribe(clickHandle);
