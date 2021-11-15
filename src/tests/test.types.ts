type TestFunction = () => TestResult;
type TestPromise = () => Promise<TestResult>;

type TestResult = {
  success: boolean;
  message?: string;
};
