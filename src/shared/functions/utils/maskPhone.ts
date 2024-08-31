export const formatPhoneNumber = (value: string): string => {
    // Remove caracteres não numéricos
    const cleaned = ('' + value).replace(/\D/g, '');
    
    // Aplica a máscara (ex: (99) 99999-9999)
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  
    // Caso não corresponda à máscara, retorna o valor original
    return value;
  };