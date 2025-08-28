import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import FrameworkDeepDive from './pages/framework-deep-dive';
import TradingToolsSuite from './pages/trading-tools-suite';
import FTMOAffiliateGateway from './pages/ftmo-affiliate-gateway';
import BlogHub from './pages/blog-hub';
import PositionSizeCalculator from './pages/position-size-calculator';
import Homepage from './pages/homepage';
import Login from './pages/auth/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<BlogHub />} />
        <Route path="/framework-deep-dive" element={<FrameworkDeepDive />} />
        <Route path="/trading-tools-suite" element={<TradingToolsSuite />} />
        <Route path="/ftmo-affiliate-gateway" element={<FTMOAffiliateGateway />} />
        <Route path="/blog-hub" element={<BlogHub />} />
        <Route path="/position-size-calculator" element={<PositionSizeCalculator />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;