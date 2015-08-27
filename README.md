### $apply

Chama uma funcao determinando valores fornecido e um array mas a funcao curry

```javascript
this.Ninja.module('$add', ['$curry'], function ($curry) {
  return $curry(function (a, b) {
    return a + b;
  });
});

this.Ninja(['$add', '$apply'], function ($add, $apply) {
  $apply($add, ['hello', ' cleber.programmer']);
});
```
