import React, {Fragment} from 'react';
import CellListItem from "../cell-list-item/cell-list-item";
import AddCell from "../add-cell/add-cell";
import {useTypedSelector} from "../../hooks/use-typed-selector";


const CellList: React.FC = () => {
    const cells = useTypedSelector(({cells: {order, data}}) => {
        return order.map((id) => data[id]
        )
    });

    const renderedCells = cells.map(cell => (
        <Fragment  key={cell.id }>
            <AddCell key={cell.id + 1} nextCellId={cell.id} />
            <CellListItem key={cell.id + 2} cell={cell} />
        </Fragment>
        ))
    return (
        <div>
            {renderedCells}
            <AddCell forceVisible={cells.length === 0} nextCellId={null} />
        </div>
    );
};

export default CellList;
