// Atividade sobre RSA (Algoritmo de criptografia assimétrica)

// Expoente público padrão usado em RSA
const PUBLIC_EXPONENT = 65537;

// Máximo divisor comum (GCD)
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

// Calcula o inverso modular usando o algoritmo de Euclides
function modInverse(e: number, t: number): number {
  let [a, b, u] = [e, t, 1];
  let v = 0;

  while (a !== 0) {
    const q = Math.floor(b / a);
    [a, b, u, v] = [b % a, a, v - q * u, u];
  }

  // Se não existe inverso, retorna 0
  return b === 1 ? ((v % t) + t) % t : 0;
}

// A exponenciação dos valores com as chaves podem gerar numeros muito grandes
// Exponenciação modular: (base^exp) % mod (Valeu programação competitiva por ter ensinado essa)
function modPow(base: number, exp: number, mod: number): number {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}

function generateKeys(p: number, q: number) {
  const n = p * q; // módulo
  const t = (p - 1) * (q - 1); // totiente

  // Ajusta o expoente público para caber no phi (necessário em exemplos pequenos)
  const e = PUBLIC_EXPONENT % t;

  // Calcula o expoente privado d
  const d = gcd(e, t) === 1 ? modInverse(e, t) : 0;

  return { p, q, n, t, e, d };
}

// ------------------------------
// EXEMPLO COM p=11 e q=13
// ------------------------------
const keys = generateKeys(11, 13);

console.log('--- Chaves RSA ---');
console.log('p =', keys.p);
console.log('q =', keys.q);
console.log('n =', keys.n);
console.log('t =', keys.t);
console.log('e =', keys.e);
console.log('d =', keys.d);

// ------------------------------
// CRIPTOGRAFIA / DECRIPTAÇÃO
// ------------------------------
const data = [80, 70, 20, 30];

// Criptografando cada número
const encrypted = data.map((m) => modPow(m, keys.e, keys.n));
console.log('Criptografado:', encrypted);

// Decriptando cada número
const decrypted = encrypted.map((c) => modPow(c, keys.d, keys.n));
console.log('Decriptografado:', decrypted);
