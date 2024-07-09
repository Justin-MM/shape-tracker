export function Triangle(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    Triangle.prototype.isValidTriangle = function () {
        return !((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2)));
    }

    Triangle.prototype.isScalene = function () {
        return this.isValidTriangle() && ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3)));
    }

    Triangle.prototype.isIsosceles = function () {
        return this.isValidTriangle() &&
            (((this.side1 !== this.side2) && ((this.side1 === this.side3))) ||
                ((this.side1 === this.side2) && ((this.side1 !== this.side3))) ||
                ((this.side1 !== this.side3) && ((this.side2 === this.side3)))
            );
    }

    Triangle.prototype.isEquilateral = function () {
        return ((this.side1 === this.side2) && (this.side1 === this.side3));
    }
}
