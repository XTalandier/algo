# Déclarer une variable

```
var nomDeLaVariable
```

# La console
Afficher quelque chose dans la console
```
console.log(var1, var2);

```

# Les conditions

## If
```
var nb = 12;
if (nb < 0) {
  console.log('0');
} else if (nb < 5) {
  console.log('< 5');
} else if (nb > 5 && nb < 20) {
  console.log('nb > 5 && nb < 20');
} else {
  console.log('autre');
}
```

## switch
```
var langue = 'fr';
switch (langue) {
  case 'fr':
    console.log('bonjour');
    break;
  case 'en':
    console.log('hello');
    break;
  default:
    console.log('??');
}
```


# Les boucles
## For
```
var max = 10;
for (var i = 0; i < max; i++) {
  console.log(i);
}
```
## While
```
var condition = true;
while (condition) {
  if (xx === 12) {
    condition = false;
  }
}
```


# Exercice

Faire un jeu de la vie:

[https://fr.wikipedia.org/wiki/Jeu_de_la_vie](https://fr.wikipedia.org/wiki/Jeu_de_la_vie)




