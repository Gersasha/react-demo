import React from "react";
import {default as Cell} from './Cell'

export default function Row({columns, item}) {
    return (
        <tr>
            {columns.map(({name}) => {
                    return <Cell caption={item[name]}/>
                }
            )}
        </tr>
    );
};