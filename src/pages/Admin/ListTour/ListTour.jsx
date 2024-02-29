import { useContext, useState } from 'react'
import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add'
import { Card, CardHeader, Grid, TableBody, TableCell, TableHead, TableRow, Toolbar } from '@mui/material'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import ActionButton from './ActionButton'

const fakeData = [
    {
        "tour_name": "Amazing Tour",
        "tour_description": "Explore breathtaking destinations with our Amazing Tour.",
        "tour_transportion": [
          // Insert Transportation ObjectId(s) here
        ],
        "tour_price": 1500,
        "discount": 10,
        "tour_img": [
          "image1.jpg",
          "image2.jpg"
        ],
        "max_tourist": 20,
        "status": true,
        "start_date": "2024-04-01T08:00:00Z",
        "end_date": "2024-04-10T18:00:00Z",
        "duration": 10,
        "start_position": "locationObjectId", // Insert Location ObjectId here
        "end_position": [
          // Insert Location ObjectId(s) here
        ],
        "return_status": true,
        "return_tax": 5
      },
      {
        "tour_name": "Oke t test",
        "tour_description": "destinations with our Amazing Tour.",
        "tour_transportion": [
          // Insert Transportation ObjectId(s) here
        ],
        "tour_price": 1500,
        "discount": 10,
        "tour_img": [
          "image1.jpg",
          "image2.jpg"
        ],
        "max_tourist": 20,
        "status": true,
        "start_date": "2024-04-01T08:00:00Z",
        "end_date": "2024-04-10T18:00:00Z",
        "duration": 10,
        "start_position": "locationObjectId", // Insert Location ObjectId here
        "end_position": [
          // Insert Location ObjectId(s) here
        ],
        "return_status": true,
        "return_tax": 5
      }
      
      
  ];

const TableListTourAdmin = () => {

  const [target, setTarget] = useState('')

  const headCells = [
    { id: 'expand-button', filterable: false },
    { id: 'tour-name', label: 'Name', filterable: true, defaultFilter: true },
    { id: 'tour-description', label: 'Tour Description', filterable: false },
    { id: 'tour-transportion', label: 'Tour Transportion', filterable: false },
    { id: 'tour-price', label: 'Tour Price', filterable: false },
    { id: 'max-tourist', label: 'Max Tourist', filterable: false },
    { id: 'start-date', label: 'Start Date', filterable: false },
    { id: 'end-date', label: 'End Date', filterable: false },
    { id: 'start-position', label: 'Start Position', filterable: false },
    { id: 'end-position', label: 'End Position', filterable: false },
    { id: 'action-button', label: 'Action Button', align: 'right', filterable: false }
  ]

  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 6 }}>
        <Card>
          <CardHeader title='List Tour Admin' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />
          
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label='sticky table'>
        <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align ?? 'left'}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
          <TableBody>
            {fakeData.map(row => {
              return (
                <TableRow hover tabIndex={-1} key={row.id}>
                  <TableCell>
                  {row.id}
                  </TableCell>
                  <TableCell>
                  {row.tour_name}
                  </TableCell>
                  <TableCell>
                  {row.tour_description}</TableCell>
                  <TableCell>{row.tour_transportion}</TableCell>
                  <TableCell>{row.tour_price}</TableCell>
                  <TableCell>{row.max_tourist}</TableCell>
                  <TableCell>{row.start_date}</TableCell>
                  <TableCell>{row.end_date}</TableCell>
                  <TableCell>{row.start_position}</TableCell>
                  <TableCell>{row.end_position}</TableCell>
                  <TableCell align={'right'}>
                  <ActionButton row={row}/>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
        </Card>
      </Grid>
    </Grid>
  )
}

export default TableListTourAdmin
