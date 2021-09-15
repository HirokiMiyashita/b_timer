import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "../Head/Head";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

// db.collection("b_timer")
//   .get()
//   .then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   });

const Data: React.VFC = () => {
  const router = useRouter();
  const sumNum = Number(router.query.count);
  const num: number = sumNum;
  const [time, setTime] = useState({});
  const timeD: number = Math.floor(num / (24 * 60 * 60));
  const timeH: number = Math.floor((num % (24 * 60 * 60)) / (60 * 60));
  const timeM: number = Math.floor(((num % (24 * 60 * 60)) % (60 * 60)) / 60);
  const timeS: number = ((num % (24 * 60 * 60)) % (60 * 60)) % 60;
  const timeDMS: string =
    timeD + "日" + timeH + "時間" + timeM + "分" + timeS + "秒";

  return (
    <div>
      <Head />
      <dl>
        <p>ss</p>
        <dt>合計学習時間</dt>
        <dd>{timeDMS}</dd>
        {/* <Button>検索</Button>
        {time.list.map((item: string[] = []) => console.log(item))} */}
        {/* {time.list.map((item: any) => (
          // <tr key={item.docId + String(new Date())}>
          <p>{item}</p>
          // <td>{item.docId}</td>
          // <td>{item.name}</td>
          // <td>{item.email}</td>
          // </tr>
        ))} */}
      </dl>
    </div>
  );
};

export default Data;
