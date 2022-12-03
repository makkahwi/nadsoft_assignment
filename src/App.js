import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const PublicLayout = lazy(() => import('./Layout'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={"Loading"}>
        <Routes>
          <Route path="*" name="Home" element={<PublicLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
