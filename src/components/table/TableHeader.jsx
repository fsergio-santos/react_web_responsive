import React, { Fragment, useState } from 'react';
import * as FaIcons from 'react-icons/fa';

const TableHeader = ({ headers, onSorting}) => {
    const [sortingField, setSortingField] = useState('');
    const [sortingOrder, setsortingOrder] = useState('asc');

    const onSortingChange = (field) => {
       const order = field === sortingField && sortingOrder === 'asc' ? 'desc': 'asc';
       setSortingField(field)
       setsortingOrder(order)
       onSorting(field,order)
    }

    return (
        
            <thead className='cf'>
                <tr className="auto bg-success text-white">
                    { headers.map( ( linha, index ) =>{
                          return (
                            <th key={index} style={{textAlign:"center"}}>
                                <button className="btn btn-link btn-success text-white text-decoration-none" onClick={() => linha.sortable ? onSortingChange(linha.field):null}>
                                    {linha.name}    
                                    { sortingField && sortingField === linha.field && ( sortingOrder === 'asc' ? <FaIcons.FaArrowDown/> : <FaIcons.FaArrowUp/>)}
                                </button>
                            </th>
                          )  
                    } ) }
                    <th style={{ textAlign:"center" }} >
                        <button className='btn btn-link text-white text-decoration-none'>
                           Ações
                        </button>
                    </th>
                </tr>
            </thead>
    )
}


export default TableHeader;