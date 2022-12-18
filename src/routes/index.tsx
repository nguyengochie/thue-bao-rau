import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Story from "pages/story";
import Layout from "component/layout";
import ContentLayout from "component/contentLayout";
import News from "pages/news";
import Combo from "pages/combo";
import History from "pages/history";
import Login from "pages/login";

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
        <Route
          path="/story"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContentLayout>
                <Story />
              </ContentLayout>
            </React.Suspense>
          }
        />
        <Route
          path="/news"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContentLayout>
                <News />
              </ContentLayout>
            </React.Suspense>
          }
        />
        <Route
          path="/combo"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContentLayout>
                <Combo />
              </ContentLayout>
            </React.Suspense>
          }
        />
        <Route
          path="/history"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContentLayout>
                <History />
              </ContentLayout>
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<>...</>}>
              <ContentLayout>
                <Login />
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
