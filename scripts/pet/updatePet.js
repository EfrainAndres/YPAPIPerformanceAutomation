import http from 'k6/http';
import { check, sleep } from 'k6';
import { errorCounter } from '../../utils/common.js';
import { BASE_URL } from '../../utils/constants.js';

export default function () {
  const payload = JSON.stringify({
    name: `UpdatedPet${Math.floor(Math.random() * 1000)}`,
    status: "sold"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.put(`${BASE_URL}/pet/1`, payload, params); // Assuming a known pet ID for testing
  const success = check(res, {
    'status is 200': (r) => r.status === 200,
  });

  if (!success) {
    errorCounter.add(1);
  }

  sleep(1);
}
