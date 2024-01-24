export type TypeLevel = {
  title: string;
  color: string;
  icon: 'up' | 'down';
  imc: Array<number>;
  userImc?: number;
};

export const levels: TypeLevel[] = [
  { title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5] },
  { title: 'Eutrofia', color: '#0eab69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99] },
];

export function calculateImc(height: number, weight: number) {
  const imc = weight / height ** 2;

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelCopy = { ...levels[i] };
      levelCopy.userImc = imc;
      return levelCopy;
    }
  }

  return null;
}
