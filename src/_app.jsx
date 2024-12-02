/**
 * Nơi code chính trong dự án
 */
// Không cần gõ .jsx cũng được nhờ vite support nhận diện đuôi file (extension) giúp chúng ta
import React, { Fragment } from "react";
import { Card } from "./components/card";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Footer } from "./components/footer";

export function App() {
  // Phải bao bọc bởi một thẻ cha
  // div, Fragment => <> </>

  return (
    <>
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