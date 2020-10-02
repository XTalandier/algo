const size = 20;
const cells = 40;
const world = [];
let currentLoop = 0;

for (let i = 0; i < size; i++) {
  const line = [];
  for (let i = 0; i < size; i++) {
    line.push(false);
  }
  world.push(line);
}

for (let i = 0; i < cells; i++) {
  world[getRandomInt(size - 1)][getRandomInt(size - 1)] = true;
}

draw();

setInterval(() => {
  next();
}, 100);

function next() {
  currentLoop++;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const voisins = getNbVoisins(x, y);
      if (voisins === 3) {
        world[y][x] = true;
      } else if (voisins < 2 || voisins > 3) {
        world[y][x] = false;
      }
    }
  }
  draw(world);
}

function getNbCells() {
  let nb = 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (world[y][x]) {
        nb++;
      }
    }
  }

  return nb;
}

function getNbVoisins(posX, posY) {
  const minX = posX > 0 ? posX - 1 : 0;
  const maxX = posX + 1;
  const minY = posY > 0 ? posY - 1 : 0;
  const maxY = posY + 1;
  let nb = 0;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (y > -1 && x > -1) {
        if (typeof world[y] !== 'undefined' && typeof world[y][x] !== 'undefined' && world[y][x]) {
          nb++;
        }
      }
    }
  }

  if (nb > 0 && world[posY][posX]) {
    nb--;
  }

  return nb;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function draw() {
  console.clear();
  console.log('Génération n°', currentLoop, 'Cellules ', getNbCells());
  let str = '';
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      str += world[y][x] ? '•' : ' ';
    }
    str += '\n';
  }

  console.log(str);
}
