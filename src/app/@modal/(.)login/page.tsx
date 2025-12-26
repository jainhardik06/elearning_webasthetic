import AuthCard from '../../../components/AuthCard';
import Modal from '../../../components/Modal';

export default function LoginModal() {
  return (
    <Modal>
      <AuthCard mode="login" isModal={true} />
    </Modal>
  );
}
