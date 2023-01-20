import React from 'react';

import classNames from 'classnames';

const Table = (props) => {
    const { 
        headers = [],
        data = [],
        clickable = false,
        onTableClick = () => {},
        clickableLabel = '',
    } = props

    const onRowClick = (label) => {
        if (clickable) {
            onTableClick(label)
        }
    }

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        {headers.map((header, id) => (
                            <th key={id}>
                                {header.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((items, id) =>
                        (
                            <tr
                                key={id}
                                className={classNames({'clickable': clickable})}
                                onClick={() => onRowClick(items[clickableLabel])}
                            >
                                {headers.map((header, id) => (
                                    <td key={id}>{items[header.label]}</td>
                                ))}
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;