function tambah(a, b) {
  if (a === undefined || b === undefined && a === null || b === null) {
    throw new Error('Input Salah');
  }
  var x = typeof a
  var y = typeof b
  if (x === "number" && y === "number"){
    return a + b
  }
  throw new Error("Input Salah")
}

function kali(a, b) {
  if (a === undefined || b === undefined && a === null || b === null) {
    throw new Error('Input Salah');
  }
  var x = typeof a
  var y = typeof b
  if (x === "number" && y === "number"){
    return a * b
  }
  throw new Error("Input Salah")
}

function kurang(a, b) {
  return a - b;
}

function bagi(a, b) {
  if (b === 0) {
    throw new Error('Tidak bisa membagi dengan nol');
  }
  return a / b;
}

export { tambah, kali, kurang, bagi };
