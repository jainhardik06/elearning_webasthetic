import AuthCard from '../../../components/AuthCard';
import Modal from '../../../components/Modal';

export default function SignupModal() {
  return (
    <Modal>
      <AuthCard mode="signup" isModal={true} />
    </Modal>
  );
}
