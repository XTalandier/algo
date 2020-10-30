# Évaluation SLAM // Algorithmie

Durée: 2h

## Exercice  /10
Fichier à rendre : ``trie.js``

### Sujet
Générer un tableau de nombres aléatoires et classez les par ordre croissant, les paires et premiers suivit des impaires.

### Exemple
```
[3, 17, 2, 6, 4] devient [2, 4, 6, 3, 17]
```


### Structure
Complétez les parties ``// CODE ICI``
```js
/**
 * Génère un nombre aléatoire entre 1 et max
 */
function random(max) {
  return Math.floor(Math.random() * max + 1)
}

/**
 * Trie un tableau
 */
function trierTableau(tab) {
  // CODE ICI (écrire vous même la fonction de trie)
  return tab;
}

var tableau = [];
for (var i = 0; i < 30; i++) {
  tableau.push(random(100));
}

var results = [];

// CODE ICI

console.log(results);
```

## Exercice 2
### Calcul matriciel
#### Somme
Soit les matrices carrées 3x3 (chaque minuscule représente un nombre).

La somme des matrices est la somme de chaque nombres aux mêmes positions

```
   | a b c |
A= | d e f |
   | g h i |

   | j k l |
B= | m n o |
   | p q r |


        | a+j b+k c+l |
A + B = | d+m e+n f+o |
        | g+p h+q i+r |
``` 

#### Multiplication

![https://www.unilim.fr/pages_perso/jean.debord/math/matrices/prodmat1.gif](https://www.unilim.fr/pages_perso/jean.debord/math/matrices/prodmat1.gif)

Détails:
![https://www.unilim.fr/pages_perso/jean.debord/math/matrices/prodmat2.gif](https://www.unilim.fr/pages_perso/jean.debord/math/matrices/prodmat2.gif)
Chaque élément de la nouvelle matrice et la somme de la multiplication des éléments même ligne même colonne des 2 matrices

### Sujet
#### Exercice 1 /5
Fichier à rendre : ``matrice1.js``

Faire la somme de 2 matrices 5x5

#### Exercice 2 /5
Fichier à rendre : ``matrice2.js``

Faire la multiplication de 2 matrices 3x3


Envoyer un zip avec les 3 fichiers à cette adresse: ``xavier.talandier@gep-by-ccimp.com``


