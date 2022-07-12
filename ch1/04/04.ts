interface Vector2D {
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = {x: 3, y: 4, name: 'Zee'};
calculateLength(v); // OK, result is 5

interface NamedVector2 extends Vector2D {
    name: string;
}

const v2: NamedVector2 = {x: 3, y: 4, name: 'Zee'};
calculateLength(v2); // OK, result is 5

/*
인터페이스가 다른데 내용물이 겹치기만 하면, 타입스크립트는 이해할 수 있음
관계를 선언하지 않아도 동작
structure typing (구조적 타이핑)
 */