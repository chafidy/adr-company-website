
/**
 * Formate un montant en Ariary avec séparateur de milliers
 * @param amount - Le montant à formater
 * @returns Le montant formaté avec 'Ar' à la fin
 */
export const formatAriary = (amount: number): string => {
  return amount.toLocaleString('fr-FR') + ' Ar';
};
