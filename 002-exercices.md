# Jeu de la vie

## Introduction

### Historique

Le jeu de la vie est un automate cellulaire imaginé par John Horton Conway en 1970
et qui est probablement le plus connu de tous les automates cellulaires.
Malgré des règles très simples, le jeu de la vie est Turing-complet.


### Déroulé
#### Etat 0
Un nombre aléatoire de céllule est positionné sur une grille de taille N

#### Etat 1
A chaque tour, les cellules meure, vive ou naisse suivant ces règles:

a) Si une cellules a 3 voisines vivantes, elle est vivante au tour suivant

![Règle A](https://upload.wikimedia.org/wikipedia/commons/3/3d/Gol-born.png)

b) Si une cellule a exactement 2 voisines, elle reste dans son état initial

![Règle B](https://upload.wikimedia.org/wikipedia/commons/f/f5/Gol-nochange.png)

c) Si une cellule a strictement moins de deux ou strictement plus de trois voisines vivantes, elle est morte à l’étape suivante

![Règle C](https://upload.wikimedia.org/wikipedia/commons/d/da/Gol-dead.png)


#### Etape 2
Refaire l'étape 1


## Exercice

### 1) Créer un tableau de tableaux

* Faire un tableau de tableau de 0 de taille 20 par 20.
* Mettre 100 cellules aléatoires à 1

`` /!\ Rappel /!\ ``

Un tableau de tableau est un tableau qui pour chaque élément contient un tableau

#### Aide
Créer un tableau

**Javascript**

```js
console.log(Math.floor(Math.random() * 10 + 1)); // Affiche un nombre aléatoire entre 0 et 10

var tableau = []; // Définition du tableau
tableau.push('a'); // Ajout d'un élément à la fin du tableau
tableau.push('b'); // Ajout d'un élément à la fin du tableau

console.log(tableau[0]); // Affiche l'élément à la position 0 du tableau
console.log(tableau.length); // Affiche la taille du tableau (dans notre cas, 2)
```


**Python**

```python
import random # Pour utiliser la fonction aléatoire
print random.randint(0, 10); # Affiche un nombre aléatoire entre 0 et 10 

tab1 = [] # Définition du tableau
tab1.append('a') # Ajout d'un élément à la fin du tableau
tab1.append('b') # Ajout d'un élément à la fin du tableau

print tab1[0] # Affiche l'élément à la position 0 du tableau
print len(tab1) # Affiche la taille du tableau (dans notre cas, 2)
```

### 2) Afficher le tableau
Faire une fonction qui prend en paramètre le tableau et l'affiche de manière "jolie"

```
01000
01110
10000
01010
01001
```
#### Aide
Utiliser des boucles imbriquées

`` /!\ Attention /!\ ``
Dans un tableau de tableaux, les lignes sont les premiers éléments.
C'est à dire que ``tab[2][7]`` renvoie la 7e cellule de la 2e ligne


##### Créer une fonction

**Javascript**

```js
function showTab(tableau){
    for(var i = 0; i < tableau.length; i++){
        console.log(tableau[i]);        
    }
}

showTab(tab1)
```

**Python**

```python
def show_tab(tableau):
    for x in tableau:
        print x

show_tab(tab1)
```

### 3) Appliquer l'algorithme

Exécuter 2x cet algorithme

```
POUR CHAQUE cel DE cellules
    SI nbvoisins(cel) == 3
        cel = 1
    SINON SI nbvoisins(cel) == 2
        ne rien faire
    SINON SI nbvoisins(cel) < 2 OU nbvoisins(cel) > 3
        cel = 0
    FIN SI
```


### 4) Exécution en boucle

Exécutez l'algorithme précédent jusqu'à l'infinie avec un 1 seconde entre chaque tour

