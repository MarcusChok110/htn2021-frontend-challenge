import { TEventType } from '../../types/events';

// map of event types and their corresponding titles
export const eventTitles: { value: TEventType; label: string }[] = [
  { value: 'activity', label: 'Activity' },
  { value: 'tech_talk', label: 'Tech Talk' },
  { value: 'workshop', label: 'Workshop' },
];

/**
 * Converts a TEventType to a displayable string
 * @param event TEventType to be converted
 */
export default function eventTypeToTitleCase(event: string | TEventType) {
  if (event === 'activity') return 'Activity';
  if (event === 'tech_talk') return 'Tech Talk';
  if (event === 'workshop') return 'Workshop';

  return 'INVALID EVENT TYPE';
}
