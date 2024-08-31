export const maskPhone = (value: string): string => {
    // Remove todos os caracteres não numéricos
    const cleaned = value.replace(/\D/g, '');

    // Limita a entrada a 11 dígitos
    const limited = cleaned.slice(0, 11);

    // Aplica a máscara
    const match = limited.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    // Aplica a máscara parcialmente, se a entrada não tiver 11 dígitos
    return limited
        .replace(/^(\d{2})(\d{0,5})/, '($1) $2')
        .replace(/(\d{5})(\d{0,4})/, '$1-$2');
};

export const validatePhone = (value: string) => {
    const noMask = value.replace(/\D/g, '');

    return noMask.length === 11;
}