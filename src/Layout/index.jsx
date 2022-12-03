import React, { Suspense } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';

import Container from '../Components/Base/Container';
import routes from "../Routes";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />

      <Container className="py-5">
        <Suspense fallback={"Loading"}>
          <Routes>
            {routes?.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            })}

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>

      <Footer />
    </>
  )
};