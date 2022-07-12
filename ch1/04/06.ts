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

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    }
}

var res = normalize({
    x: 3,
    y: 4,
    z: 5
});

console.log(res);

/*
calculateLength 에서 Vector3D중 z값도 계산하길 기대했으나 실제로는 반영되지 않음
타입체커는 따로 오류를 잡아주지 못함
Vector3D가 x,y값이 있어서 Vector2D로 호환되기때문 -> 오류가 발생하지 않음

 */