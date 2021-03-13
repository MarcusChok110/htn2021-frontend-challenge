import { TEventType } from '../../types/events';

export const eventTitles: { value: TEventType; label: string }[] = [
  { value: 'activity', label: 'Activity' },
  { value: 'tech_talk', label: 'Tech Talk' },
  { value: 'workshop', label: 'Workshop' },
];

export default function eventTypeToTitleCase(event: string | TEventType) {
  if (event === 'activity') return 'Activity';
  if (event === 'tech_talk') return 'Tech Talk';
  if (event === 'workshop') return 'Workshop';

  return 'INVALID EVENT TYPE';
}
