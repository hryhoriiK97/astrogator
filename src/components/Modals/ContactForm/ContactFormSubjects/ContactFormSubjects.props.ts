export interface ContactFormSubjectsProps {
  data: string[];
  selectedSubject?: string;
  onSubjectPress: (newTopic: string) => void;
}
