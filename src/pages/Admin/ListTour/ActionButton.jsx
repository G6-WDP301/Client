//React Imports
import React, { useState, useContext } from 'react'
//MUI Imports
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { CustomButton } from '../../utils/components/CustomButton'

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
    <div>
      <CustomButton
        id='loadbalancer-action-edit'
        title={'Edit'}
        icon={<EditIcon fontSize='small' />}
        onClick={() => handleIconButtonOnClick(row, setShowEditModal)}
        disabled={false}
      />
      <CustomButton
        id='loadbalancer-action-resize'
        title={'Delete'}
        icon={<DeleteForeverIcon fontSize='small' />}
        onClick={() => handleIconButtonOnClick(row, setShowDeleteModal)}
        disabled={false}
      />
    </div>
  )
}

export default ActionButton
