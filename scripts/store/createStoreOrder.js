import http from 'k6/http';
import { check, sleep } from 'k6';
import { errorCounter } from '../../utils/common.js';
import { BASE_URL } from '../../utils/constants.js';

export default function () {
  const payload = JSON.stringify({
    id: Math.floor(Math.random() * 1000000),
    petId: 1, // Assuming a known pet ID for testing
    quantity: 1,
    shipDate: new Date().toISOString(),
    status: "placed",
    complete: true
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/store/order`, payload, params);
  const success = check(res, {
    'status is 200 or 201': (r) => r.status === 200 || r.status === 201,
  });

  if (!success) {
    errorCounter.add(1);
  }

  sleep(1);
}
