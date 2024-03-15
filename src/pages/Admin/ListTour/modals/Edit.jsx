import { useEffect, useState } from 'react';
import { StyledDialog } from '../../../utils/components/StyledDialog';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const EditStateModal = ({ row, openModal, setOpenModal }) => {
  const [loadingEditSubmit, setLoadingForEdit] = useState(false);
  const [stateTour, setStateTour] = useState('pedding'); //cái này sau thay bằng row.state nhé
  const stateOptions = ['pending', 'approved', 'rejected'];

  // useEffect(() => {
  //   setStateTour(row.state) // cái này truyên từ bên Action Button sang, cái này là để trong popup hiển thị giá trị của state đang có, ví dụ đang là pedding thì hiển thị là pedding
  // }, [row])

  const handleActionEditSubmit = async () => {
    setLoadingForEdit(true);
  };

  return (
    <div>
      <StyledDialog open={openModal} maxWidth="md">
        <DialogTitle>
          <div style={{ display: 'flex' }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Update State Tour by Admin:
            </Typography>
            <Button
              color="secondary"
              onClick={() => {
                setOpenModal(false);
              }}
              id="close-outline-edit"
            >
              <CloseOutlinedIcon />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Do you really want to approve or reject the post?
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {stateOptions.map((stateOption, index) => (
              <Button
                key={index}
                // onClick={() => setStateTour(stateOption)}                        //co api thi thay vao nhe
                // color={stateOption === stateTour ? 'primary' : 'default'}
              >
                {stateOption}
              </Button>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancel-edit"
          >
            Cancel
          </Button>
          <LoadingButton
            size="medium"
            variant="contained"
            loading={loadingEditSubmit}
            onClick={() => handleActionEditSubmit()}
            id="submit-edit"
            // disabled={
            //   row.state === stateTour
            //   //cái state này thì lấy từ api xuống, row.state là được truyền từ component cha là action button sang nha
            // }
          >
            Edit
          </LoadingButton>
        </DialogActions>
      </StyledDialog>
    </div>
  );
};

export default EditStateModal;
