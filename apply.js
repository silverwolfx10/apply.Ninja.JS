/**
 * $apply
 * 
 * Chama uma funcao determinando valores fornecido e um array
 * mas a funcao curry
 * 
 * @module $apply
 * @author Cleber de Moraes Gonçalves <cleber.programmer>
 * @example
 * 
 *        $apply($add, ['hello ', 'cleber.programmer']);
 * 
 */
this.Ninja.module('$apply', ['$curry'], function ($curry) {
  
  /**
   * Chama uma funcao determininado valores fornecido de uma array
   * 
   * @public
   * @method apply
   * @param {Function} a Funcao que recebera seus n argumentos
   * @param {Array} b Array de argumentos que sera passado para a funcao
   * @return {Array|Boolean|Date|Funcation|Null|Object|String|Undefined} Resultado da execucao da funcao
   * @example
   * 
   *        $apply($add, ['hello ', 'cleber.programmer']);
   * 
   */
  function apply(a, b) {
    return a.apply(a, b);
  }
  
  /**
   * Revelacao do servico $apply, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(apply);
  
});
