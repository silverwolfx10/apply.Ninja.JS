### $apply

Chama uma funcao determinando valores fornecido e um array mas a funcao curry

```javascript
Ninja.service('$add', ['$curry'], function ($curry) {
  return $curry(function (a, b) {
    return a + b;
  });
});

Ninja(['$add', '$apply'], function ($add, $apply) {
  $apply($add, ['hello', ' cleber.programmer']);
});
```
