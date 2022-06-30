LaunchOptions: Attempted repro for https://github.com/microsoft/playwright/issues/15273
==========


Attempted steps:

```bash
$ npm ci
$ npm ls @playwright/test
# observe we are on 1.22.2
$ npx playwright install
$ npx playwright test
# observe it is a headFUL browser

# repeat after updating to 1.23.1
$ npm i @playwright/test@1.23.1
$ npm ls @playwright/test
# observe we are on 1.23.1
$ npx playwright install
$ npx playwright test
# observe it is a headless browser
```
