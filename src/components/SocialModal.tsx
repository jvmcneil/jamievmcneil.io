import { Box, Modal, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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

      <SocialMediaRow href="mailto:jamievmcneil@gmail.com">
        <EmailIcon />

        <Box sx={{ ml: 1 }}>
          <Typography variant='body1'>{strings.EMAIL}</Typography>
          <Typography variant='subtitle2'>{strings.EMAIL_ADDRESS}</Typography>
        </Box>
      </SocialMediaRow>

      <SocialMediaRow href="https://github.com/mcneiljv" target="_blank" rel="noreferrer nofollow">
        <GithubIcon />

        <Box sx={{ ml: 1 }}>
          <Typography variant='body1'>{strings.GITHUB}</Typography>
          <Typography variant='subtitle2'>{strings.GITHUB_USERNAME}</Typography>
        </Box>
      </SocialMediaRow>

      <SocialMediaRow href="https://www.linkedin.com/in/jamiemcneil/" target="_blank" rel="noreferrer nofollow">
        <LinkedInIcon />

        <Box sx={{ ml: 1 }}>
          <Typography variant='body1'>{strings.LINKEDIN}</Typography>
          <Typography variant='subtitle2'>{strings.LINKEDIN_USERNAME}</Typography>
        </Box>
      </SocialMediaRow>
    </SocialModalContent>
  </Modal>
);

export default SocialModal;
