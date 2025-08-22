# Atividade: Criptografia RSA em TypeScript

Esse repositório demonstra uma implementação simples do algoritmo RSA (criptografia assimétrica) usando TypeScript. O objetivo é ilustrar os principais conceitos do RSA, como geração de chaves, criptografia e decriptação de dados.

## Funcionalidades

- **Geração de chaves RSA**: Utiliza dois números primos para gerar as chaves pública e privada.
- **Criptografia**: Permite criptografar um array de números inteiros usando a chave pública.
- **Decriptação**: Permite decriptar os dados criptografados usando a chave privada.

## Como executar

1. Instale as dependências:
   ```bash
   npm install typescript --save-dev
   ```
2. Compile o arquivo TypeScript:
   ```bash
   npx tsc main.ts
   ```
3. Execute o arquivo gerado:
   ```bash
   node main.js
   ```

## Saída esperada

O script irá exibir:

- Os valores das chaves geradas (p, q, n, phi, e, d)
- O array criptografado
- O array decriptografado (deve ser igual ao original)
