interface Cylinder {
  radius: number
  height: number
}

const Cylinder = (radius: number, height: number): Cylinder => ({ radius, height })

/*
타입, 값으로 둘다 쓰일 수 있다.
 */