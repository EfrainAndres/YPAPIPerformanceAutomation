import http from 'k6/http';
import { check, sleep } from 'k6';
import { errorCounter } from '../../utils/common.js';
import { BASE_URL } from '../../utils/constants.js';

export default function () {
  const res = http.del(`${BASE_URL}/pet/1`); // Assuming a known pet ID for testing
  const success = check(res, {
    'status is 200': (r) => r.status === 200,
  });

  if (!success) {
    errorCounter.add(1);
  }

  sleep(1);
}