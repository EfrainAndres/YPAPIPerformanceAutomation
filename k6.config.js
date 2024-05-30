export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
      errors: ['count<10'], // Example threshold for errors
    },
    ext: {
      loadimpact: {
        projectID: 3699345,
        token: 'ccbff8bb3206219a6401e859d7bd29afce9535a74657b01c19be7ae682ab9d60'
      }
    }
  };