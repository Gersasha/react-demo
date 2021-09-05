import React from "react";
import {default as Row} from './Row'

export default function Table({items, columns}) {
    return (
        <table>
            {items.map((item) => {
                    return <Row columns={columns} item={item}/>
                }
            )}
        </table>
    );
};