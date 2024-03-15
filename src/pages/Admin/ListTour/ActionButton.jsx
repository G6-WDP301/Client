//React Imports
import React, { useState, useContext } from 'react'
//MUI Imports
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { CustomButton } from '../../utils/components/CustomButton'
import EditStateModal from './modals/Edit.jsx'
import DeleteTourAdminModal from './modals/Delete.jsx'
import { Button, IconButton, Tooltip } from '@mui/material'

//Styled Imports

const ActionButton = ({ row }) => {
  const [visibleModals, setVisibleModals] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleIconButtonOnClick = async (row, setShowModalFunc) => {
    setVisibleModals(true)
    setAnchorEl(null)
    setShowModalFunc(true)
  }

  return (
    <div className='flex gap-1'>
      <Tooltip
      PopperProps={{
        sx: {
          '& .MuiTooltip-tooltip': {
            border: 'solid primary.main 1px',
            backgroundColor: 'primary.contrastText',
            color: 'primary.main',
            fontSize: '0.875rem'
          }
        }
      }}
    >
      <span>
        <Button
          onClick={() => handleIconButtonOnClick(row, setShowEditModal)}
          disabled={false}
          sx={{
            border: `rgba(0,0,0,0.2) solid 1px`,
            borderRadius: '5px',
            padding: '2px',
            marginLeft:'4px',
            marginRight:'4px',
            mr: '7px',
            backgroundColor:'#ffffff',
            color:'#'
          }}
        >
          pedding 
          {/* {row.state}*/}
        </Button>
      </span>
    </Tooltip>
      <CustomButton
        id='loadbalancer-action-resize'
        title={'Delete'}
        icon={<DeleteForeverIcon fontSize='small' />}
        onClick={() => handleIconButtonOnClick(row, setShowDeleteModal)}
        disabled={false}
      />
      {visibleModals && (
        <div>
          <EditStateModal
            row={row}
            openModal={showEditModal}
            setOpenModal={setShowEditModal}
          />
          <DeleteTourAdminModal
            row={row}
            openModal={showDeleteModal}
            setOpenModal={setShowDeleteModal}
          />
        </div>
      )}
    </div>
  )
}

export default ActionButton
