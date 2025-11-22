// Icon mapping from Material Icons to Emoji
export const iconMap = {
    // Service Categories
    'flight': '✈️',
    'groups': '👥',
    'account_balance': '🏛️',
    'receipt_long': '🧾',

    // Entry Permits
    'badge': '🎫',
    'work': '💼',
    'business_center': '💼',
    'family_restroom': '👨‍👩‍👧‍👦',

    // Residence Visas
    'home': '🏠',
    'school': '🏫',
    'apartment': '🏢',
    'child_care': '👶',

    // Emirates ID
    'credit_card': '💳',
    'fingerprint': '👆',
    'verified_user': '✅',

    // Government Services
    'description': '📄',
    'business': '🏢',
    'account_box': '👤',
    'assignment': '📋',

    // Banking
    'savings': '💰',
    'credit_score': '📊',
    'currency_exchange': '💱',

    // Tax Services
    'calculate': '🧮',
    'receipt': '🧾',
    'assessment': '📈',
    'price_check': '💵',

    // Business Setup
    'store': '🏪',
    'factory': '🏭',
    'domain': '🌐',
    'article': '📰',

    // Default
    'default': '⭐'
};

export function getIcon(iconName) {
    return iconMap[iconName] || iconMap['default'];
}
