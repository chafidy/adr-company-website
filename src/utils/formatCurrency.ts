
/**
 * Formate un montant en Ariary avec séparateur de milliers
 * @param amount - Le montant à formater
 * @returns Le montant formaté avec 'Ar' à la fin
 */
export const formatAriary = (amount: number): string => {
  return amount.toLocaleString('fr-FR') + ' Ar';
};

/**
 * Formate un montant en Euros avec séparateur de milliers
 * @param amount - Le montant à formater
 * @returns Le montant formaté avec '€' à la fin
 */
export const formatEuro = (amount: number): string => {
  return amount.toLocaleString('fr-FR') + ' €';
};

/**
 * Convertit un montant d'Ariary en Euros
 * @param ariaryAmount - Le montant en Ariary
 * @param rate - Le taux de conversion (par défaut: 4500 Ar pour 1 €)
 * @returns Le montant converti en Euros
 */
export const convertAriaryToEuro = (ariaryAmount: number, rate: number = 4500): number => {
  return Math.round(ariaryAmount / rate);
};

/**
 * Convertit un montant d'Euros en Ariary
 * @param euroAmount - Le montant en Euros
 * @param rate - Le taux de conversion (par défaut: 4500 Ar pour 1 €)
 * @returns Le montant converti en Ariary
 */
export const convertEuroToAriary = (euroAmount: number, rate: number = 4500): number => {
  return Math.round(euroAmount * rate);
};
