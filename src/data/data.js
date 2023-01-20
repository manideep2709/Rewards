import { rewards_calculator } from "../utill";

const getData = () => {
    return [
        {
            customer_name: 'Lucas',
            item_name: 'Trouser',
            amount_spent: 103
        },
        {
            customer_name: 'Anas',
            item_name: 'Roller',
            amount_spent: 90
        },
        {
            customer_name: 'Meera',
            item_name: 'T-Shirt',
            amount_spent: 58
        },
        {
            customer_name: 'Anas',
            item_name: 'Chickpeas',
            amount_spent: 4
        },
        {
            customer_name: 'Lucas',
            item_name: 'Wine',
            amount_spent: 83
        },
        {
            customer_name: 'Lucas',
            item_name: 'Detergent',
            amount_spent: 51
        },
        {
            customer_name: 'Anas',
            item_name: 'TV',
            amount_spent: 340
        }
    ];
};

const fetch_transactions_by_customer = (customer) => {
    let customer_data = []

    const data = getData()

    for (let i=0; i<data.length; i++) {
        const customer_name = data[i].customer_name

        if (customer_name === customer) {
            customer_data.push({
                item_name: data[i].item_name,
                amount_spent: data[i].amount_spent,
                reward_points: rewards_calculator(data[i].amount_spent)
            })
        }
    }

    return customer_data
}

const fetch_customers = () => {
    let customers = {}

    const data = getData()

    for (let i=0; i<data.length; i++) {
        const customer_name = data[i].customer_name

        if (customer_name in customers) {
            customers[customer_name]['transaction_count'] += 1
            customers[customer_name]['amount_spent'] += data[i].amount_spent
            customers[customer_name]['reward_points'] += rewards_calculator(data[i].amount_spent)
        } else {
            customers[customer_name] = {
                transaction_count: 1,
                amount_spent: data[i].amount_spent,
                reward_points: rewards_calculator(data[i].amount_spent),
                customer_name
            }
        }
    }

    return customers
}

export {
    fetch_customers,
    fetch_transactions_by_customer
};