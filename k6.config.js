export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
      errors: ['count<10'], // Example threshold for errors
    },
    ext: {
      loadimpact: {
        projectID: yourID,
        token: 'yourToken'
      }
    }
  };
