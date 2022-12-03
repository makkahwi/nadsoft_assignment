import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingIndicator from "./Components/Loading Indicator";

const PublicLayout = lazy(() => import('./Layout'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route path="*" name="Home" element={<PublicLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
