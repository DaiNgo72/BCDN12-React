/**
 * Nơi code chính trong dự án
 */
// Không cần gõ .jsx cũng được nhờ vite support nhận diện đuôi file (extension) giúp chúng ta
import React, { Fragment } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

import { DataBinding } from "./buoi-2/data-binding/data-binding";

import { HandleEvent } from "./buoi-2/handle-event/handle-event";

import { Inline } from "./buoi-2/inline/inline";

import { Global } from "./buoi-2/global/global";

import { Module } from "./buoi-2/module/module";

import { Props } from "./buoi-3/props/props";

import CompState from "./buoi-3/state/state";

import { BaiTapProps } from "./buoi-4/bai-tap/bai-tap";

export function App() {
  // Phải bao bọc bởi một thẻ cha
  // div, Fragment => <> </>

  return (
    <>
      <BaiTapProps />
    </>
  );
}
