export const maskInDate = (input: string): string => {
    // Remove qualquer caractere não numérico
    const cleanedInput = input.replace(/\D/g, '');

    // Limita o comprimento da entrada para 8 dígitos
    const limitedInput = cleanedInput.slice(0, 8);

    // Verifica se a entrada possui o comprimento adequado
    if (limitedInput.length < 8) {
        return limitedInput; // Retorna o valor limpo se tiver menos de 8 dígitos
    }

    // Formata a data no formato DD/MM/YYYY
    const day = limitedInput.substring(0, 2);
    const month = limitedInput.substring(2, 4);
    const year = limitedInput.substring(4, 8);

    return `${day}/${month}/${year}`;
};