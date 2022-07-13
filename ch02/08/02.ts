interface Cylinder {
  radius: number
  height: number
}

const Cylinder = (radius: number, height: number) => ({ radius, height })

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius
    // ~~~~~~ Property 'radius' does not exist on type '{}'
  }
}


/*
 instanceof 는 런타임 연산자. 값에 대하여 연산 타입에는 쓸 수 없음
 */