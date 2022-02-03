import React from "react";
import ReducerHook from "./components/ReducerHook";
import StateHook from "./components/StateHook";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import EffectHook from "./components/EffectHook";
import RefHook from "./components/RefHook";
import LayoutEffectHook from "./components/LayoutEffectHook";
import ImperativeHandle from "./components/ImperativeHandle";
import Context from "./components/Context";
import Memo from "./components/Memo";
import Callback from "./components/Callback";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate" element={<StateHook />} />
        <Route path="/usereducer" element={<ReducerHook />} />
        <Route path="/useeffect" element={<EffectHook />} />
        <Route path="/useref" element={<RefHook />} />
        <Route path="/uselayouteffect" element={<LayoutEffectHook />} />
        <Route path="/useimperativehandle" element={<ImperativeHandle />} />
        <Route path="/usecontext" element={<Context />} />
        <Route path="/usememo" element={<Memo />} />
        <Route path="/usecallback" element={<Callback />} />
      </Routes>
    </Layout>
  );
}
