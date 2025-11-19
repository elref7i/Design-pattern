const TraficLights = function () {
  var currentState = new Red(this);

  this.change = function (state) {
    currentState = state;
    currentState.go();
  };
};

// Red
const Red = function (light) {
  this.light = light;
  this.go = function () {
    console.log(`${this.light} => 1 min`);
    light.change(new Green(light));
  };
};

// Green
const Green = function (light) {
  this.light = light;
  this.go = function () {
    console.log("Green => 1 min");
    light.change(new Yellow(light));
  };
};

// Yellow
const Yellow = function (light) {
  this.light = light;
  this.go = function () {
    console.log("Yellow => 1 min");
    light.change(new Red(light));
  };
};

const light = new TraficLights();

light.change(new Red("red"));
