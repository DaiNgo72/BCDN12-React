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

export function App() {
  // Phải bao bọc bởi một thẻ cha
  // div, Fragment => <> </>

  return (
    <>
      <Module></Module>

      <Global></Global>

      <Inline />

      {/* <HandleEvent /> */}

      {/* <DataBinding /> */}

      {/* <Header></Header> */}
      {/* Nếu không content  */}
      <Header />

      <Content></Content>

      <Card></Card>
      <Card />

      <Footer></Footer>
    </>
  );
  // vite => sẽ chuyển thành như thế này
  return (
    <Fragment>
      <div></div>
      <div></div>
    </Fragment>
  );
}
