import { useEffect, useState } from "react";

import Table from "./Table";
import { fetch_customers, fetch_transactions_by_customer } from "./data/data";

import './App.css';

function App() {
    const [dataItems, setDataItems] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState(undefined)
    const [customerData, setCustomerData] = useState([])

    useEffect(() => {
        const customers = Object.values(fetch_customers())

        setDataItems(customers)
    }, []);

    const onTableClick = (customer) => {
        setSelectedCustomer(customer)
        const customer_data = fetch_transactions_by_customer(customer)

        setCustomerData(customer_data)
    }

    return (
        <div>
            <section>
                <div className="container">
                    <div>
                        {!selectedCustomer ?
                            <>
                                <header>
                                    <h2>Reward Points</h2>
                                </header>
                                <Table
                                    headers={[
                                        {
                                            name: 'Customer',
                                            label: 'customer_name'
                                        }, {
                                            name: 'Transaction Count',
                                            label: 'transaction_count'
                                        },{
                                            name: 'Amount Spent',
                                            label: 'amount_spent'
                                        }, {
                                            name: 'Reward Points',
                                            label: 'reward_points'
                                        }
                                    ]}
                                    data={dataItems}
                                    onTableClick={onTableClick}
                                    clickableLabel={'customer_name'}
                                    clickable
                                    id={'customers'}
                                />
                            </> :
                            <>
                                <header>
                                    <button onClick={() => setSelectedCustomer(undefined)}>
                                        &#x25c0;
                                    </button>
                                    <h2 style={{display: 'inline-block', marginLeft: '10px'}}>
                                        {selectedCustomer}
                                    </h2>
                                </header>
                                <Table
                                    headers={[
                                        {
                                            name: 'Item Name',
                                            label: 'item_name'
                                        }, {
                                            name: 'Amount',
                                            label: 'amount_spent'
                                        }, {
                                            name: 'Reward Points',
                                            label: 'reward_points'
                                        }
                                    ]}
                                    data={customerData}
                                    id={'customer'}
                                />
                            </>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
