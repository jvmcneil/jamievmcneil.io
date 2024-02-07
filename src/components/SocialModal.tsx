import { Modal, Typography } from '@mui/material';
import { strings } from '../constants/strings';
import { SocialModalContent } from './Styles.css';

interface SocialModalProps {
  modalOpen: boolean;
  handleModalToggle: (modalOpen: boolean) => void;
}

const SocialModal = ({ modalOpen, handleModalToggle }: SocialModalProps) => (
  <Modal
    open={modalOpen}
    onClose={() => handleModalToggle(modalOpen)}
    aria-labelledby="modal-title"
    aria-describedby="modal-description">
    <SocialModalContent sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Typography id="modal-title" variant="h6" component="h2">
        {strings.SOCIAL}
      </Typography>
      <Typography id="modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </SocialModalContent>
  </Modal>
);

export default SocialModal;
