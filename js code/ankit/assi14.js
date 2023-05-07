function Rectangle(length, width) {
    var length = parseInt(prompt("Enter a number: "));
    var width = parseInt(prompt("Enter a number: "));
    this.length = length;
    this.width = width;
  }
  
  Rectangle.prototype.getArea = function() {
    return this.length * this.width;
  };
  
  Rectangle.prototype.getPerimeter = function() {
    return 2 * (this.length + this.width);
  };
  
  function Circle(radius) {
    var radius = parseInt(prompt("Enter a number: "));
    this.radius = radius;
  }
  
  Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };
  
  Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.radius;
  };
  
  var rectangle = new Rectangle();
  var circle = new Circle();
  
  alert("Rectangle dimensions: " + rectangle.length + " x " + rectangle.width);
  alert("Rectangle area: " + rectangle.getArea());
  alert("Rectangle perimeter: " + rectangle.getPerimeter());
  
  alert("Circle dimensions: radius " + circle.radius);
  alert("Circle area: " + circle.getArea());
  alert("Circle circumference: " + circle.getCircumference());