// Hard copy from https://stackoverflow.com/a/52050059
export function objectsAreEqual(x: any, y: any): boolean {
  if (x === y) return true;
  // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false;
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    // other properties were tested using x.constructor === y.constructor

    if (!y.hasOwnProperty(p)) return false;
    // allows to compare x[ p ] and y[ p ] when set to undefined

    if (x[p] === y[p]) continue;
    // if they have the same strict value or identity then they are equal

    if (typeof x[p] !== 'object') return false;
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!objectsAreEqual(x[p], y[p])) return false;
    // Objects and Arrays must be tested recursively
  }

  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
    // allows x[ p ] to be set to undefined
  }
  return true;
}

// Hard copy from https://stackoverflow.com/a/14853974
export function arraysAreEqual(array1: any[], array2: any[]): boolean {
  // if the other array is a falsy value, return
  if (!array1) return false;

  // compare lengths - can save a lot of time
  if (array2.length != array1.length) return false;

  for (var i = 0, l = array2.length; i < l; i++) {
    // Check if we have nested arrays
    if (array2[i] instanceof Array && array1[i] instanceof Array) {
      // recurse into the nested arrays
      if (!arraysAreEqual(array2[i], array1[i])) return false;
    } else if (array2[i] != array1[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
}

export function createBoolTable(
  array: { x: number; y: number }[]
): boolean[][] {
  let minx = 0,
    miny = 0,
    maxx = 0,
    maxy = 0;
  array.map((v) => {
    if (v.x < minx) minx = v.x;
    if (v.x > maxx) maxx = v.x;
    if (v.y < miny) miny = v.y;
    if (v.y > maxy) maxy = v.y;
  });

  let rowlength = Math.abs(minx - maxx);
  let columnlength = Math.abs(miny - maxy);

  let table: boolean[][] = new Array(rowlength);

  for (let x = minx; minx <= x && x <= maxx; x++) {
    let row: boolean[] = new Array(columnlength);
    let xindex = x - minx;

    table[xindex] = row;
    for (let y = miny; miny <= y && y <= maxy; y++) {
      let yindex = y - miny;

      if (
        array.filter((element, index) => {
          return element.x == x && element.y == y;
        }).length > 0
      ) {
        table[xindex][yindex] = true;
      } else {
        table[xindex][yindex] = false;
      }
    }
  }
  return table;
}

export function drawBoolTableInConsole(table: boolean[][]) {
  table.map((row) => {
    let rowrender = '';
    row.map((column) => {
      rowrender += column ? 'O' : '.';
    });
    console.log(rowrender);
  });
}
