function Point(x, y) {
    this.x = x;
    this.y = y;
}
function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
Circle.prototype = {
};

function Line(start, end) {
    this.start = a;
    this.end = b;
}
Line.prototype = {
    /*
    **  A*start.x + B*start.y = 0,
    **  A*end.x + B*end.y = 0
    **
    **  alpha = A/B, beta = C/B
    */
    equation: function() {
        var beta = -1 * (start.y * end.x) / (end.x - start.x),
            alpha = -1 * beta / end.x;
    }
};

var App = {
    run: function() {
        for (var i = 1; i < 5; i++) {
            this.drawCircle(290 + i, 300 + i, 10 + i * 2, 0, Math.PI * 2, true);
        }
        this.drawCircleLine();
        this.drawSokolLine();
    },
    
    drawCircle: function(x, y, radius, startAngle, endEngle, anticlockwize) {
        var ctx = $('#map')[0].getContext("2d");

        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle, endEngle, anticlockwize);
        ctx.stroke();
        ctx.closePath();
    },
    
    drawCircleLine: function() {
        var ctx = $('#map')[0].getContext("2d");

        ctx.beginPath();
        ctx.lineWidth = 15;
        ctx.fillStyle = "rgba(200,200,200,0.3)";
        ctx.strokeStyle = '#663300';
        ctx.arc(400,300,250,0,Math.PI*2,true); // Outer circle
        ctx.stroke();   
        ctx.closePath();
    },
    
    drawSokolLine: function() {
        var ctx = $('#map')[0].getContext("2d");

        ctx.fillStyle = "red";

        ctx.beginPath();
        ctx.moveTo(250, 650);
        ctx.lineTo(500, 0);
        ctx.lineWidth = 15;
        ctx.strokeStyle = "#ff0000"; // line color
        ctx.stroke();
        ctx.closePath();
    },
    
    getCirclePoint: function(circle) {
        
    },
    
    getIntersection: function(circle, line) {
        var dx = line.end.x - line.start.x,
            dy = line.end.y - line.start.y,
            dr = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)),
            D = line.start.x * line.end.y - line.end.x * line.start.y,
            discriminant = Math.pow(circle.radius, 2) * Math.pow(dr, 2) - Math.pow(D, 2);

            console.log('discriminant', discriminant);
            
            
            //var circleFormula = Math.pow((circle.x - circle.shiftX), 2) + Math.pow((circle.y - circle.shiftY), 2) - Math.pow(circle.radius, 2);
        //Уравнение окружности:
        /*
         * (400 - a)^2 + (300 - b)^2 = 250^2
         * 400 ^ 2 - 800a + a^2 + 300^2 - 600b - b^2 = 250^2;
         */
        
        
        /*
double r, a, b, c; // входные данные

double x0 = -a*c/(a*a+b*b),  y0 = -b*c/(a*a+b*b);
if (c*c > r*r*(a*a+b*b)+EPS)
    puts ("no points");
else if (abs (c*c - r*r*(a*a+b*b)) < EPS) {
    puts ("1 point");
    cout << x0 << ' ' << y0 << '\n';
}
else {
    double d = r*r - c*c/(a*a+b*b);
    double mult = sqrt (d / (a*a+b*b));
    double ax,ay,bx,by;
    ax = x0 + b * mult;
    bx = x0 - b * mult;
    ay = y0 - a * mult;
    by = y0 + a * mult;
    puts ("2 points");
    cout << ax << ' ' << ay << '\n' << bx << ' ' << by << '\n';
}
         */
    }
};

$(function() {
   App.run(); 
});