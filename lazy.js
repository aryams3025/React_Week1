import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App = () => (
  <div>
    <h1>Main App</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default App;
