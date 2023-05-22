export interface ContactFormProps {
  isVisible: boolean;
  onCloseModal: () => void;
  onWriteEmailButtonPress: (selectedSubject?: string) => void;
}
