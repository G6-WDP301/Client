import React, { useState, useContext, useEffect } from 'react';
//MUI Imports
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CustomButton } from '../../../pages/utils/components/CustomButton.jsx';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

import './ActionButton.scss';
import moment from 'moment'

import axios from 'axios';

const ActionButton = ({ user }) => {
  const [visibleModals, setVisibleModals] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [value, setValue] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [role_id, setRoleId] = useState('');


  useEffect(() => {
    if (showEditDialog === true) {
      axios.get(`http://localhost:8080/api/user/${user._id}`)
        .then((response) => {
          const useData = response.data.data
          setValue(useData)

        })
        .catch(error => console.log(error))
    }
  }, [user._id, showEditDialog]);

  const handleClickUser = (userId) => {
    setSelectedUserId(userId);
    navigate(`/users/${userId}`);
  }

  // const handleIconButtonOnClick = async (user, setShowModalFunc) => {
  //   setVisibleModals(true);
  //   setAnchorEl(null);
  //   setShowModalFunc(true);
  // };
  useEffect(() => {
    axios.post(`http://localhost:8080/api/user/update/${user._id}`)
      .then((response) => {
        const useData = response.data.data;
        console.log("userData ne: ", useData);
        setValue(useData)

      })
      .catch(error => console.log(error))
  }, [])


  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    setShowDeleteDialog(false);
  };

  const handleDeleteCancel = () => {
    setShowDeleteDialog(false);
  };

  const handleEditClick = () => {
    setShowEditDialog(true);
  };

  const handleEditClose = () => {
    setShowEditDialog(false);
  };

  const handleIconButtonOnClick = (modalType) => {
    if (modalType === 'edit') {
      handleEditClick();
    } else if (modalType === 'delete') {
      handleDeleteClick();
    }
  };

  return (
    <>
      <div classNameNameName="flex gap-1">
        <CustomButton
          id="loadbalancer-action-edit"
          title={'Edit'}
          icon={<EditIcon fontSize="small" />}
          onClick={() => handleIconButtonOnClick('edit')}
          disabled={false}
        />
        <CustomButton
          id="loadbalancer-action-resize"
          title={'Delete'}
          icon={<DeleteForeverIcon fontSize="small" />}
          onClick={() => handleIconButtonOnClick('delete')}
          disabled={false}
        />
      </div>
      <Dialog
        open={showDeleteDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Delete Data'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} variant="outlined" color="error">
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            variant="contained"
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={showEditDialog}
        onClose={handleEditClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="form-dialog-title" className="fw-bold">
          Edit User
        </DialogTitle>
        <DialogContent className="mt-4 mb-4">
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="username"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  value={value?.username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  value={value?.email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  for="dateOfBirth"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date of birth
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  value={moment(value?.dob).format("DD/MM/YYYY")}
                  onChange={(event) => {
                    setDob(event.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  for="PhoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="PhoneNumber"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  value={value?.phoneNumber}
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  value={value?.address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>
              <div className="mb-5">
                <label
                  for="roleId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Role
                </label>
                <input
                  type="text"
                  id="roleId"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                  value={value?.role_id === "65aa441d1de57d06c7f378a6" ? "User" : "Admin"}
                  onChange={(event) => {
                    setRoleId(event.target.value);
                  }}
                />
              </div>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose} variant="outlined" color="error">
            Cancel
          </Button>
          <Button onClick={handleEditClose} variant="contained" color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ActionButton;
