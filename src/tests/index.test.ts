import config from './test.config';

export default function test() {
  console.log('Running various tests, might take a while\n');

  let test_result_list: TestResult[] = new Array(config.tests.length);
  let promise_test_list: Promise<TestResult>[] = new Array(config.tests.length);
  let tests_passed = 0,
    tests_failed = 0;
  let test_fail_messages: String[] = [];

  // Run the tests
  for (let i = 0; i < config.tests.length; i++) {
    const test = config.tests[i];
    test_result_list[i] = test();
  }

  // Check results
  for (let i = 0; i < test_result_list.length; i++) {
    const result = test_result_list[i];
    if (result.success) {
      tests_passed++;
    } else {
      tests_failed++;
      if (result.message) {
        test_fail_messages.push(result.message);
      }
    }
  }

  // Get promise tests
  for (let i = 0; i < config.promise_tests.length; i++) {
    const test = config.promise_tests[i];
    promise_test_list[i] = test();
  }

  // Run the promise tests
  Promise.all(promise_test_list).then((test_results) => {
    // Check the promise test results
    for (let i = 0; i < test_results.length; i++) {
      const result = test_results[i];
      if (result.success) {
        tests_passed++;
      } else {
        tests_failed++;
        if (result.message) {
          test_fail_messages.push(result.message);
        }
      }
    }

    // Report any failures
    for (let i = 0; i < test_fail_messages.length; i++) {
      const message = test_fail_messages[i];
      console.log(message);
    }

    // Report the results
    console.log('\n');
    console.log('Tests passed:', tests_passed, 'Tests failed:', tests_failed);
    console.log('\n');

    if (tests_failed == 0) {
      console.log('All tests completed successfully');
      console.log(
        'Tests successful, should work 1% of codebase tested good luck.'
      );
      process.exit(0);
    } else {
      console.log('Some tests failed, check console output');
      console.log('Tests unsuccessful, 1% of codebase tested good luck.');
      process.exit(1);
    }
  });
}

test();
