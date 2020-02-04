const anagrammes = (stringA, stringB) => {
  /**
   * stringA est égale à stringB si et seulement s'ils partagent les mêmes
   * caractères alphabétiques dans la même quantité.
   * La case n'est pas pris en compte
   *
   * Exemples :
   *
   * anagrams('rail safety', 'fairy tales') === true
   * anagrams('RAIL! SAFETY!', 'fairy tales') === true
   * anagrams('Hi there', 'Bye there') === false
   */
  const regex = /([A-Za-z])\w+/g
  const sortedA = stringA.split('').sort().join('').toLowerCase().match((regex) || []).join('')
  const sortedB = stringB.split('').sort().join('').toLowerCase().match((regex) || []).join('')
  console.log(sortedA, sortedB)
  return sortedA === sortedB
};


class Stack {
  constructor () {
    this.data = []
    this.index = 0
  }

  push (element) {
    this.data[this.index] = element
    this.index++
  }

  pop () {
    this.index--
    return this.data[this.index]
  }

  peek () {
    return this.data[this.index -1]
  }
/**
 * Créer une structure d'empilement. La structure doit être
 * une classe contenant les méthodes :
 *  - `push`: pour ajouter un élément au bout de l'empilement,
 *  - `pop` pour retirer le dernier élément et le retourner;
 *  - et `peek` pour récupérer le premeier élément.
 *
 * Exemples :
 *
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.push(3);
 * s.pop(); // returns 3
 * s.pop(); // returns 2
 * s.peek(); // returns 1
 */
};


const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        let ret = ''
        if (i % 3 === 0) {
            ret += 'fizz'
        }
        if (i % 5 === 0) {
            ret += 'buzz'
        }

        console.log(ret ? ret : i)
    }
/**
 * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et
 * les multiples de 5 par buzz
 *
 * Exemple :
 *
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

};

const spirale = (n) => {
    let result = new Array(n).fill().map(() => new Array(n).fill('')); // create empty n x n array
    let counter = 1;
    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;
        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }
    return result
/**
 * Retourne une matrice spirale de taille n x n.
 *
 * Exemples :
 *
 * matrix(2) = [[1, 2],
 *              [4, 3]]
 *
 * matrix(3) = [[1, 2, 3],
 *              [8, 9, 4],
 *              [7, 6, 5]]
 *
 * matrix(4) = [[1,   2,  3, 4],
 *              [12, 13, 14, 5],
 *              [11, 16, 15, 6],
 *              [10,  9,  8, 7]]
 */

};


const puissance4 = (grid) => {
    const checkVictory = (array) => {
        if (array.join('').includes('1111')) return 1
        if (array.join('').includes('2222')) return 2
        return 0
    }

    let found = 0
    grid.forEach((row) => {
        if (!found) {
            // Tant qu'on n'a pas trouvé de 4 lignes
            found = checkVictory(row)
        }
    })
    grid[0].forEach((cell, x) => {
        if (!found) {
            let col = []
            grid.forEach((row) => {
                col.push(row[x])
            })
            found = checkVictory(col)
        }
    })
    // test diagonale
    let deltaX = 0
    let deltaY = 0
    while (4 + deltaX <= grid[0].length && !found) {
        let diag = []
        let diagMirror = []
        for (let i = 0; i < Math.min(grid.length, grid[0].length); i++) {
            const x = i + deltaX
            const y = i + deltaY
            const len = grid.length

            if (grid[x]) diag.push(grid[x][y])
            if (grid[len - x]) diagMirror.push(grid[len - x][y])
        }
        deltaX++
        found = checkVictory(diag)
        found = found ? found : checkVictory(diagMirror)
    }
    deltaX = 0
    while (4 + deltaY <= grid.length && !found) {
        let diag = []
        let diagMirror = []
        for (let i = 0; i < Math.min(grid.length, grid[0].length); i++) {
            const x = i + deltaX
            const y = i + deltaY
            const len = grid.length

            if (grid[x]) diag.push(grid[x][y])
            if (grid[len - x]) diagMirror.push(grid[len - x][y])
        }
        deltaY++
        found = checkVictory(diag)
        found = found ? found : checkVictory(diagMirror)
    }


    return found
/**
 * Vérifie si un joueur a gagné au puissance 4,
 * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
 *
 * Exemples :
 *
 * puissance4(
 *  [[ 1, 0, 0, 0 ],
 *   [ 2, 1, 0, 0 ],
 *   [ 2, 1, 1, 2 ],
 *   [ 2, 1, 1, 2 ]]
 *   ) = 1
 * )
 *
 * puissance4(
 *  [[ 1, 1, 0, 0, 0 ],
 *   [ 2, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 *
 * puissance4(
 *  [[ 1, 2, 0, 0, 0 ],
 *   [ 1, 2, 2, 0, 0 ],
 *   [ 2, 2, 1, 1, 2 ],
 *   [ 2, 2, 1, 1, 2 ]]
 *   ) = 0
 */
}

module.exports = {
  fizzBuzz,
  puissance4,
  spirale,
  anagrammes,
  Stack
}

console.log(puissance4(
    [[ 0, 1, 3, 0, 0 ],
           [ 2, 2, 2, 0, 0 ],
           [ 2, 2, 1, 1, 2 ],
           [ 2, 2, 1, 1, 2 ]]
))
