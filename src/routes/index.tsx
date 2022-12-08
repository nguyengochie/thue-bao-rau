import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Layout from "component/layout";
import ContentLayout from "component/contentLayout";

const index = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/home"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContentLayout>
                <Home />
              </ContentLayout>
            </React.Suspense>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};
export default index;
