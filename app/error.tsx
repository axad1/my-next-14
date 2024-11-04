"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("Error boundary catches => ", error);
  return (
    <>
      <div>Error: Something went wrong</div>
      <button onClick={reset}>Try again</button>
    </>
  );
}
