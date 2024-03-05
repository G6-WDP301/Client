import { useContext, useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import AddIcon from '@mui/icons-material/Add'
import { Card, CardHeader, Grid, TableBody, TableCell, TableHead, TableRow, Toolbar } from '@mui/material'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import ActionButton from './ActionButton'
import axios from 'axios'
import moment from 'moment'
import { useNavigate } from 'react-router-dom';


const UserTable = () => {

  const [target, setTarget] = useState('')
  const [users, setUsers] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState([]);
  const navigate = useNavigate();

  const headCells = [
    // { id: 'expand-button', filterable: false },
    { id: 'id', label: 'ID Number', filterable: true},
    { id: 'user-name', label: 'Name', filterable: false },
    { id: 'email', label: 'Email', filterable: false },
    { id: 'dob', label: 'Date of Birth', filterable: false },
    { id: 'gender', label: 'Gender', filterable: false },
    { id: 'phone number', label: 'Phone Number', filterable: false },
    { id: 'address', label: 'Address', filterable: false },
    { id: 'role', label: 'Role', filterable: false },
    { id: 'action-button', label: 'Action Button', align: 'center', filterable: false }
  ]

  useEffect(() => {
    axios.get('http://localhost:8080/api/user/all')
      .then((response) => {
        const usersData = response.data.data;
        setUsers(usersData);
        console.log(usersData);
      })
      .catch(error => console.log(error));
  }, []);


    return (
        <Grid container>
      <Grid item xs={12} sx={{ p: 6 }}>
        <Card>
          <CardHeader className='bg-slate-200 text-slate-400 font-bold' title='List User Admin' titleTypographyProps={{ variant: 'h6', color: 'primary' }} />

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
                  {users?.map((user, index) => {
                    return (
                      <TableRow hover tabIndex={-1} key={user?._id}>
                        <TableCell align={'center'}>
                            {index + 1}
                        </TableCell>
                        <TableCell>
                          {user?.username}
                        </TableCell>
                        <TableCell>{user?.email}</TableCell>
                        <TableCell>{moment(user?.dob).format("DD/MM/YYYY")}</TableCell>
                        <TableCell>{user?.gender}</TableCell>
                        <TableCell>{user?.phoneNumber}</TableCell>
                        <TableCell>{user?.address}</TableCell>
                        <TableCell>{user?.role_id === "65aa441d1de57d06c7f378a6" ? "User" : "Admin"}</TableCell>
                        <TableCell align={'right'}>
                          <ActionButton user={user} />
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
    );
}

export default UserTable;
