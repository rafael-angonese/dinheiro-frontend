/**
 * Calcula o MOD11 para o número informado
 * @param valor Número base para o calculo
 * @param limite Limite da casa de multiplicação
 * Para CPF assume o valor de 12, para CNPJ o valor de 9.
 * @returns Retorna o DV calculado
 */
export const mod11 = (clearValue: string, limite: number): number => {
  const valor = String(clearValue).replace(/\D/g, '')
  let sum = 0
  let mult = 2

  for (let i = valor.length - 1; i >= 0; i--) {
    sum += mult * +valor[i]
    if (++mult > limite) {
      mult = 2
    }
  }
  const dv = ((sum * 10) % 11) % 10
  return dv
}
