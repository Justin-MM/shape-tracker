import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

    test('should correctly create a triangle object with three lengths', () => {
        const triangle = new Triangle(2, 4, 5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });

    test('should correctly determine whether three lengths are not a triangle', () => {
        const notTriangle = new Triangle(3, 9, 22);
        expect(notTriangle.isValidTriangle()).toEqual(false);
    });

    test('should correctly determine whether three lengths make a scalene triangle', () => {
        const scalTriangle = new Triangle(4, 5, 7)
        expect(scalTriangle.isScalene()).toEqual(true);
    });

    test('should correctly determine whether three lengths make an isosceles triangle', () => {
        const isoscTriangle = new Triangle(5, 5, 7)
        const isoscTriangle2 = new Triangle(7, 5, 5);
        const isoscTriangle3 = new Triangle(5, 7, 5);
        expect(isoscTriangle.isIsosceles()).toEqual(true);
        expect(isoscTriangle2.isIsosceles()).toEqual(true);
        expect(isoscTriangle3.isIsosceles()).toEqual(true);
    });
});