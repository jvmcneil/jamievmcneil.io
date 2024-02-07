import { Box, Modal, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { strings } from '../constants/strings';
import { SocialMediaRow, SocialModalContent } from './Styles.css';

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
      <SocialMediaRow>
        <EmailIcon />

        <Box>
          <Typography>test</Typography>
          <Typography>test</Typography>
        </Box>
      </SocialMediaRow>
    </SocialModalContent>
  </Modal>
);

export default SocialModal;
