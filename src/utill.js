const rewards_calculator = (amount) => {
    if (amount > 49 && amount < 101) {
        return amount - 50
    } else if (amount > 100) {
        const first = amount - 100
        const second = (amount - 50) - first

        return first * 2 + second
    } else {
        return 0
    }
}

export {
    rewards_calculator
}