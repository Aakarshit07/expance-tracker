export const validateExpense = (amount: number): boolean => {
    return amount > 0;
  };
  
  export const validateCategory = (category: string, categories: string[]): boolean => {
    return categories.includes(category);
  };
  