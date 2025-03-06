import http from "k6/http";
import { sleep, check } from "k6";
import "@testing-library/jest-dom";


export let options = {
  vus: 50, // Simulate 50 users
  duration: "10s", // For 10 seconds
};

export default function () {
  let res = http.get("http://localhost:3000/users");
  check(res, { "status is 200": (r) => r.status === 200 });
  sleep(1);
}
