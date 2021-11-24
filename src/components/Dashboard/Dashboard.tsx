import React from 'react';
import {Button} from '@mui/material';
import {DataTable} from '../DataTable'

interface Props{
    data: Array<Object>;
}

export const Dashboard = (props: Props) =>{
    return(
        <div>
            <h1>Placeholder data pending API implementation</h1>
            <DataTable/>
        </div>
    )
}