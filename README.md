# API Performance Test

## Overview

This project contains performance testing scripts using [K6](https://k6.io/), a modern load testing tool. The scripts are organized by functionality, targeting different aspects of the application under test.

## Prerequisites

- Node.js installed
- K6 installed

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/EfrainAndres/YPAPIPerformanceAutomation.git
    cd YPAPIPerformanceAutomation
    ```

## Project Structure

```
PerformancePetStoreAPI/
├── k6.config.js
├── utils/
│ ├── constants.js
│ └── common.js
├── scripts/
│ ├── user/
│ │ ├── createUser.js
│ │ ├── deleteUser.js
│ │ ├── updateUser.js
│ │ └── retrieveUser.js
│ ├── pet/
│ │ ├── createPet.js
│ │ ├── deletePet.js
│ │ ├── updatePet.js
│ │ └── retrievePet.js
│ │ └── listPets.js
│ └── store/
│ ├── createStoreOrder.js
│ └── retrieveStoreOrder.js
└── .git/
```
## Running Tests

To run a specific scenario, use the following command:
```sh
k6 run scripts/<path-to-script>.js
```
For example, to run the createUser scenario:
```sh
k6 run scripts/user/createUser.js
```

## Scenarios Explanation

### User Scenarios

1. **Create User**
   - This script creates a new user in the system. It simulates multiple users attempting to create accounts concurrently.
  
2. **Delete User**
   - This script deletes an existing user. It tests the system's ability to handle multiple delete operations.
  
3. **Update User**
   - This script updates the details of an existing user. It simulates concurrent user update requests.
  
4. **Retrieve User**
   - This script retrieves user details from the system, testing the read performance under load.

### Pet Scenarios

1. **Create Pet**
   - This script creates a new pet entry. It tests the system's performance with concurrent pet creation requests.
  
2. **Delete Pet**
   - This script deletes a pet entry, checking how well the system handles multiple delete operations.
  
3. **Update Pet**
   - This script updates the details of an existing pet, simulating multiple update requests.
  
4. **Retrieve Pet**
   - This script retrieves pet details, testing read operations under load.
  
5. **List Pets**
   - This script lists all pets, simulating load on the listing functionality.

### Store Scenarios

1. **Create Store Order**
   - This script creates a new store order, testing the system's performance with multiple order creation requests.
  
1. **Retrieve Store Order**
   - This script retrieves store order details, checking the system's read performance under load.


## Test Results

After running the tests, K6 will provide detailed results including metrics such as response times, number of requests per second, and error rates. These results help in identifying performance bottlenecks and areas for optimization.

## Viewing Results

By default, K6 outputs the results to the console. 
You can also output the results to a file using the --out option:
```sh
k6 run --out json=results.json scripts/user/createUser.js
```
<img width="1014" alt="image" src="https://github.com/EfrainAndres/YPAPIPerformanceAutomation/assets/20568951/026a8e6e-f75c-4919-b87e-313cc589b191">

## Analyzing Results

To analyze the results, using various tools and platforms to integrate with K6, such as:

- **Grafana:**  Visualize the performance data in real-time using Grafana dashboards.
- **InfluxDB:** Store the performance metrics in InfluxDB for further analysis.

Here is an example of how to configure K6 to send results to Grafana:
```sh
k6 run --out influxdb=http://localhost:8086/k6 scripts/user/createUser.js
```
<img width="1433" alt="image" src="https://github.com/EfrainAndres/YPAPIPerformanceAutomation/assets/20568951/e0c4faab-a627-4b3f-ad9d-fac642c0a2c0">

### Overview

*   **Execution Mode:** Local
    
*   **Script:** scripts/user/createUser.js
    
*   **Output:** Cloud (with a link to Grafana dashboard: [Grafana](https://efrainvergara.grafana.net/a/k6-app/runs/2820983))
    
*   **Scenarios:** 1 scenario with 1 virtual user (VU) performing 1 iteration each. The test has a maximum duration of 10 minutes and 30 seconds, including a graceful stop period.
    

### Test Summary

*   **Checks:** 100% passed. Specifically, the check for HTTP status being 200 or 201 passed.
    
*   **Data Received:** 5.9 kB (3.6 kB/s)
    
*   **Data Sent:** 844 B (518 B/s)
    

### HTTP Request Metrics

*   **HTTP Request Blocked:** Average = 528.93 ms, Median = 528.93 ms, Min = 528.93 ms, Max = 528.93 ms
    
    *   This includes time spent in DNS lookup, connection setup, etc.
        
*   **HTTP Request Connecting:** Average = 95.93 ms, Median = 95.93 ms, Min = 95.93 ms, Max = 95.93 ms
    
    *   Time taken to establish a connection with the server.
        
*   **HTTP Request Duration:** Average = 98.44 ms, Median = 98.44 ms, Min = 98.44 ms, Max = 98.44 ms
    
    *   Total time for the request, including waiting, sending, and receiving.
        
    *   Expected Response: Average = 98.44 ms
        
*   **HTTP Request Failed:** 0% (No failed requests)
    
*   **HTTP Request Receiving:** Average = 209 µs, Median = 209 µs, Min = 209 µs, Max = 209 µs
    
    *   Time taken to receive the response from the server.
        
*   **HTTP Request Sending:** Average = 1.34 ms, Median = 1.34 ms, Min = 1.34 ms, Max = 1.34 ms
    
    *   Time taken to send the request to the server.
        
*   **HTTP Request TLS Handshaking:** Average = 202.45 ms, Median = 202.45 ms, Min = 202.45 ms, Max = 202.45 ms
    
    *   Time taken for the TLS handshake process.
        
*   **HTTP Request Waiting:** Average = 96.88 ms, Median = 96.88 ms, Min = 96.88 ms, Max = 96.88 ms
    
    *   Time spent waiting for the server to respond after sending the request.
        

### Request Count and Iterations

*   **HTTP Requests:** 1 request made during the test (0.613616 requests per second)
    
*   **Iteration Duration:** Average = 1.62 seconds, Median = 1.62 seconds, Min = 1.62 seconds, Max = 1.62 seconds
    
*   **Iterations:** 1 iteration completed (0.613616 iterations per second)
    

### Virtual Users

*   **Virtual Users (VUs):** Constantly 1 VU throughout the test
    
*   **Maximum VUs:** 1
    

### Interpretation

1.  **Performance:** The average request duration of 98.44 ms indicates that the server's response time for a single user creation request is slightly better compared to the previous test (101.89 ms), which is within a reasonable range for many applications.
    
2.  **Reliability:** There were no failed requests, indicating reliable performance for this single iteration.
    
3.  **Data Transfer:** The amount of data sent and received is low, which is expected for a single user creation operation.
    
4.  **Connection Time:** The time for blocking (528.93 ms) and TLS handshaking (202.45 ms) indicates some latency in establishing connections, which can be investigated further.
    
5.  **Scenario Configuration:** Similar to the previous test, this test was very limited (1 VU, 1 iteration) and doesn't represent a load test. It provides a basic sanity check of the user creation functionality.

