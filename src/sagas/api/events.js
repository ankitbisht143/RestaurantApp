import {WOOBLY_BASE_URL} from '../../api/url';

export function* getEvents(){
  const response=yield fetch(`${WOOBLY_BASE_URL}/assignment.php`);
  const events=yield response.status === 200?response.json():[]
  
  return events;
}
