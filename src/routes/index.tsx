import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PublicProfile from '../components/pages/Profile';

import TestLayout from '../components/pages/TestLayout';
import TestLayoutForm from '../components/pages/TestLayoutForm';
import TestSelect from '../components/pages/TestSelect';

import PageNotFound from '../components/templates/PageNotFound';
import TemplateDefault from '../components/templates/Default';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicProfile />} />
        
        <Route element={<TemplateDefault />}>
          <Route path="/test-layout" element={<TestLayout />} />
          <Route path="/test-layout-form" element={<TestLayoutForm />} />
          <Route path="/test-select" element={<TestSelect />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;
