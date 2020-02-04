# De JSON à HTML

Cet exercice est l'occasion de s'entraîner avec la syntaxe JSX.
Depuis un objet JSON contenant des informations sur un utilisateur aléatoire, on affichera une [carte Bootstrap](https://getbootstrap.com/docs/4.4/components/card/) contenant un maximum d'informations sur cet utilisateur.



# :speech_balloon: Données

On récupère sur [randomuser.me](https://randomuser.me/api/) un objet JSON, qu'on sauvegardera dans un fichier `user.js`. Par exemple :


```js
const data = {"results":[{"gender":"female","name":{"title":"Mrs","first":"Hanna","last":"Mckinney"},"location":{"street":{"number":727,"name":"Pearse Street"},"city":"Kilkenny","state":"Limerick","country":"Ireland","postcode":83207,"coordinates":{"latitude":"23.6892","longitude":"147.0082"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"hanna.mckinney@example.com","login":{"uuid":"69691a78-db57-4d8a-9533-ff6984ecd95f","username":"brownzebra977","password":"close","salt":"SwD2HN1w","md5":"fd1e226f185cc332524372bec1a624ad","sha1":"0716284c971d31069b9f631ceef8c2566a3bd4ab","sha256":"537f7a4ef5e17d728fb00f8787a2acf18e1e2ce1e9626ea5481d91fa76aaa87c"},"dob":{"date":"1968-02-02T20:52:59.612Z","age":52},"registered":{"date":"2012-10-23T04:13:34.384Z","age":8},"phone":"031-878-6398","cell":"081-652-5686","id":{"name":"PPS","value":"3606946T"},"picture":{"large":"https://randomuser.me/api/portraits/women/50.jpg","medium":"https://randomuser.me/api/portraits/med/women/50.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/50.jpg"},"nat":"IE"}],"info":{"seed":"eee0e46e4ae04ff8","results":1,"page":1,"version":"1.3"}};
```

# :mag: Rendu 

Voici un code générique pour construire une carte avec Bootstrap :

```html
<div class="card m-5">
  <img class="card-img-top" src="..." alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

Source: [Bootstrap Card](https://getbootstrap.com/docs/4.4/components/card/#example)
