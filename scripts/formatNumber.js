export function formatNumber (price) {
    const formatter = new Intl.NumberFormat('is-IS', {
        style: 'currency',
        currency: 'ISK',

    });
    return formatter.format(price);

}
