import { Box, Modal, Typography } from '@mui/material';
import { strings } from '../constants/strings';

interface SocialModalProps {
  modalOpen: boolean;
  handleModalToggle: (modalOpen: boolean) => void;
}

const SocialModal = ({ modalOpen, handleModalToggle }: SocialModalProps) => {
  const tempStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.default',
    color: 'text.primary',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  return (
    <Modal
      open={modalOpen}
      onClose={() => handleModalToggle(modalOpen)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description">
      <Box sx={tempStyle}>
        <Typography id="modal-title" variant="h6" component="h2">
          {strings.SOCIAL}
        </Typography>
        <Typography id="modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default SocialModal;
