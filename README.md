# Playwright TestDino reporting setup

## Prerequisites

- Install the TestDino CLI:
  ```bash
  npm install tdpw
  ```
- Set your API token:
  ```bash
  export TESTDINO_TOKEN=your-token-here
  ```

## Run locally

```bash
npx playwright test
npx tdpw upload ./playwright-report --token="$TESTDINO_TOKEN" --upload-html
```

## Notes

- The Playwright config uses the HTML reporter before the JSON reporter so TestDino can consume the generated report.
- The JSON reporter is required for TestDino parsing.
- In CI, wrap the upload step with `if: always()` so it still runs when tests fail.
