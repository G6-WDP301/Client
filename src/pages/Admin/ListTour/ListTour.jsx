import { useContext, useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import {
  Button,
  Card,
  CardHeader,
  Grid,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Toolbar,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import ActionButton from './ActionButton';
import axios from 'axios';
import moment from 'moment';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { LoadingButton } from '@mui/lab';
import { StyledDialog } from '../../utils/components/StyledDialog';
import { jwtDecode } from 'jwt-decode';

const TableListTourAdmin = () => {
  const [target, setTarget] = useState('');
  const [tours, setTours] = useState([]);
  const [openCreateTour, setOpenCreateTour] = useState(false);
  const [tourName, setTourName] = useState('');
  const [tourDes, setTourDes] = useState('');
  const [tourPrice, setTourPrice] = useState('');
  const [maxTourist, setMaxTourist] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [duration, setDuration] = useState('');
  const [transportion, setTransportion] = useState('');

  const headCells = [
    { id: 'expand-button', filterable: false },
    { id: 'tour-name', label: 'Tour', filterable: true, defaultFilter: true },
    { id: 'tour-description', label: 'Tour Description', filterable: false },
    // { id: 'tour-transportion', label: 'Tour Transportion', filterable: false },
    { id: 'tour-price', label: 'Tour Price', filterable: false },
    { id: 'max-tourist', label: 'Max Tourist', filterable: false },
    { id: 'start-date', label: 'Start Date', filterable: false },
    { id: 'end-date', label: 'End Date', filterable: false },
    { id: 'start-position', label: 'Start Position', filterable: false },
    { id: 'end-position', label: 'End Position', filterable: false },
    { id: 'action-button', label: 'Action Button', filterable: false },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/tour/find-all')
      .then((response) => {
        const tourData = response.data.tours;
        setTours(tourData);
        console.log(tourData);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;
    try {
      const response = axios.post('http://localhost:9999/api/tour/create', {
        user_id: userId
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        const responseData = response.data;
        console.log('Booking tour successful:', responseData);
        toast.success('Booking successful ~')
        navigate('/')
      } else {
        console.error('Booking tour failed:', response.data);
        const errorData = response.error;
        console.error('Error Data:', errorData);
        toast.error(errorData.error);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} sx={{ p: 6 }}>
        <Card>
          <CardHeader
            className="bg-slate-200 text-slate-400 font-bold"
            title="List Tour Admin"
            titleTypographyProps={{ variant: 'h6', color: 'primary' }}
          />

          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Toolbar sx={{ py: 3 }}>
              <Button
                text="Add"
                onClick={() => setOpenCreateTour(true)}
                variant="outlined"
                sx={{ float: 'right' }}
                id="listener-create"
              >
                Create tour
              </Button>
            </Toolbar>
            <StyledDialog open={openCreateTour}>
              <DialogTitle sx={{ display: 'flex' }}>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ flexGrow: 1 }}
                >
                  Create Tour
                </Typography>
                <Button
                  color="secondary"
                  onClick={() => setOpenCreateTour(false)}
                >
                  <CloseOutlinedIcon />
                </Button>
              </DialogTitle>
              <DialogContent dividers>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="Name"
                      label="Tour Name"
                      fullWidth
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      value={tourName}
                      onChange={(event) => {
                        setTourName(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="Description"
                      label="Tour Description"
                      fullWidth
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      value={tourDes}
                      onChange={(event) => {
                        setTourDes(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="Price"
                      label="Tour Price"
                      type="number"
                      onKeyDown={(e) =>
                        ['e', 'E', '+', '-'].includes(e.key) &&
                        e.preventDefault()
                      }
                      InputProps={{
                        inputProps: {
                          min: 1,
                        },
                      }}
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      value={tourPrice}
                      onChange={(event) => {
                        setTourPrice(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="Max Tourist"
                      label="Max Tourist"
                      type="number"
                      onKeyDown={(e) =>
                        ['e', 'E', '+', '-'].includes(e.key) &&
                        e.preventDefault()
                      }
                      InputProps={{
                        inputProps: {
                          min: 1,
                        },
                      }}
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      value={maxTourist}
                      onChange={(event) => {
                        setMaxTourist(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="datetime-local"
                      label="Start date"
                      type="datetime-local"
                      value={startDateTime}
                      onChange={(event) => {
                        setStartDateTime(event.target.value);
                      }}
                      sx={{ width: '100%' }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="datetime-local"
                      label="End date"
                      type="datetime-local"
                      value={endDateTime}
                      onChange={(event) => {
                        setEndDateTime(event.target.value);
                      }}
                      sx={{ width: '100%' }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="Duration"
                      label="Duration"
                      fullWidth
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      value={duration}
                      onChange={(event) => {
                        setDuration(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="Transportion"
                      label="Transportion"
                      fullWidth
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      value={transportion}
                      onChange={(event) => {
                        setTransportion(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="tour-image"
                      type="file"
                      fullWidth
                      sx={{
                        mt: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#ffffff',
                      }}
                      onChange={(event) => {
                        const selectedImage = event.target.files[0];
                        console.log(selectedImage);
                      }}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  color="secondary"
                  id="listener-cancel-create-button"
                  onClick={() => setOpenCreateTour(false)}
                >
                  Cancel
                </Button>
                <LoadingButton
                  size="medium"
                  id="listener-create-button"
                  variant="contained"
                >
                  Create
                </LoadingButton>
              </DialogActions>
            </StyledDialog>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align={headCell.align ?? 'left'}
                      >
                        {headCell.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tours.map((row) => {
                    return (
                      <TableRow hover tabIndex={-1} key={row?._id}>
                        <TableCell>{/* {row._id} */}</TableCell>
                        <TableCell>{row.tour_name}</TableCell>
                        <TableCell>{row.tour_description}</TableCell>
                        {/* <TableCell>{row.tour_transportion}</TableCell> */}
                        <TableCell>{row.tour_price}$</TableCell>
                        <TableCell>{row.max_tourist}</TableCell>
                        <TableCell>
                          {moment(row.start_date).format('DD/MM/YYYY')}
                        </TableCell>
                        <TableCell>
                          {moment(row.end_date).format('DD/MM/YYYY')}
                        </TableCell>
                        <TableCell>
                          {row.start_position?.location_name}
                        </TableCell>
                        <TableCell>
                          {row.end_position[0]?.location_name}
                        </TableCell>
                        <TableCell align={'right'}>
                          <ActionButton row={row} />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TableListTourAdmin;
