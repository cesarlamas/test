const matrix = [
  ['a', 'e', 't', 'l'],
  ['d', 'a', 'e', 'u'],
  ['t', 'e', 'a', 'r'],
  ['c', 'h', 'x', 'g'],
];

const words = [
  'leadtech',
  'notleadtech',
  'potato',
  'anotherCompany',
  'great',
];

function findWords(matrix, words) {
  
  // Posibles direcciones dentro de la matriz
  const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1],     
      [-1, -1], [-1, 1], [1, -1], [1, 1]      
  ];

  // Función para validar si una posición es válida
  function isValid(x, y) {
      return x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length;
  }

  // Función para recorrer la matriz
  // Desde un punto (x, y) se recorre la matriz en todas las direcciones
  // CurrentWord es la palabra que se va formando
  // Visited es un set con las posiciones visitadas
  
  function dfs(x, y, currentWord, visited) {
      currentWord += matrix[x][y];

      if (words.includes(currentWord)) {
          foundWords.add(currentWord);
      }

      visited.add(`${x},${y}`);

      for (let [dx, dy] of directions) {
          let nx = x + dx;
          let ny = y + dy;
          if (isValid(nx, ny) && !visited.has(`${nx},${ny}`)) {
              dfs(nx, ny, currentWord, new Set(visited));
          }
      }

      visited.delete(`${x},${y}`);
  }

  let foundWords = new Set();
  
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
          dfs(i, j, '', new Set());
      }
  }

  return Array.from(foundWords);
}

console.log(findWords(matrix, words)); 
