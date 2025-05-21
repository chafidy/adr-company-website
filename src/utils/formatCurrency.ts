
/**
 * Formate un montant en Ariary avec séparateur de milliers
 * @param amount - Le montant à formater
 * @returns Le montant formaté avec 'Ar' à la fin
 */
export const formatAriary = (amount: number): string => {
  return amount.toLocaleString('fr-FR') + ' Ar';
};

/**
 * Convertit un montant d'euros en ariary (taux approximatif)
 * @param euroAmount - Le montant en euros
 * @returns Le montant converti en ariary
 */
export const convertEuroToAriary = (euroAmount: number): number => {
  // Taux de conversion approximatif: 1 EUR ≈ 4500 Ar
  const conversionRate = 4500;
  return Math.round(euroAmount * conversionRate);
};
