class Square {
    constructor(public width: number) {
    }
}

class Rectangle extends Square {
    constructor(public width: number, public height: number) {
        super(width);
    }
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        shape;  // Type is Rectangle
        return shape.width * shape.height;
    } else {
        shape;  // Type is Square
        return shape.width * shape.width;
    }
}

/*
타입 스크립트는 클래스는 클래스이면서도 타입으로도 쓸 수 있음
클래스 - 타입 & 값으로 모두 사용 가능
인터페이스 - 타입으로만 사용 가능
 */
