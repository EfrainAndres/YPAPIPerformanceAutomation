import { Counter } from 'k6/metrics';

export let errorCounter = new Counter('errors');