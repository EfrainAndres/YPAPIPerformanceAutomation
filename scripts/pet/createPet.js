import http from 'k6/http';
import { check, sleep } from 'k6';
import { errorCounter } from '../../utils/common.js';
import { BASE_URL } from '../../utils/constants.js';

export default function () {
  const payload = JSON.stringify({
    id: Math.floor(Math.random() * 1000000),
    name: `Pet${Math.floor(Math.random() * 1000)}`,
    photoUrls: ["https://example.com/photo1.jpg"],
    tags: [{ id: 1, name: "tag1" }],
    status: "available"
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(`${BASE_URL}/pet`, payload, params);
  const success = check(res, {
    'status is 200 or 201': (r) => r.status === 200 || r.status === 201,
  });

  if (!success) {
    errorCounter.add(1);
  }

  sleep(1);
}
