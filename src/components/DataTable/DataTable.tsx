import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// https://mui.com/components/data-grid/#mit-version

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'year',
    headerName: 'Year',
    width: 150,
    editable: true,
  },
  {
    field: 'make',
    headerName: 'Make',
    width: 150,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    width: 150,
    editable: true,
  },
  {
      field: 'mileage',
      headerName: 'Mileage',
      width: 150,
  },
  {
      field: 'value',
      headerName: 'Value',
      width: 150
  }
];

const rows = [

    {id: '204d20ec-9b6f-4576-879a-bbc14372cee0', year: 2000, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee1', year: 2001, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee2', year: 2002, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee3', year: 2003, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee4', year: 2004, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee5', year: 2005, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee6', year: 2006, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee7', year: 2007, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee8', year: 2008, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee9', year: 2009, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},
    {id: '204d20ec-9b6f-4576-879a-bbc14372cee12', year: 2010, make: "Waldo", model: "Crazy car", mileage: 123456, value: "$987,654"},

];

export function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}