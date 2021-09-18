import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "../Head/Head";
import { listTodos } from "../../../src/graphql/queries";
import API, { graphqlOperation } from "@aws-amplify/api";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as Styled from "../styled";
import { formControlClasses } from "@mui/material";

async function getdata() {
  const data = await API.graphql(graphqlOperation(listTodos));
  console.log("取得");
  return data;
}

const Data: React.VFC = () => {
  useEffect(() => {
    const data = getdata().then((val: any) => {
      const arrayDate = val.data.listTodos.items;
      setData(arrayDate);
    });
  }, []);
  const router = useRouter();
  const sumNum = Number(router.query.count);
  const num: number = sumNum;
  const [data, setData] = useState([]);
  const timeD: number = Math.floor(num / (24 * 60 * 60));
  const timeH: number = Math.floor((num % (24 * 60 * 60)) / (60 * 60));
  const timeM: number = Math.floor(((num % (24 * 60 * 60)) % (60 * 60)) / 60);
  const timeS: number = ((num % (24 * 60 * 60)) % (60 * 60)) % 60;
  const timeDMS: string =
    timeD + "日" + timeH + "時間" + timeM + "分" + timeS + "秒";
  console.log(data);
  return (
    <Styled.wrapper>
      <Head />
      <Styled.content>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>日付　｜　</TableCell>
                <TableCell>学習時間</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val: any) => {
                const num: number = val.description;
                const createDateVal = val.createdAt;
                const createDate = createDateVal.substr(5, 5);
                console.log(createDate);
                const timeD: number = Math.floor(num / (24 * 60 * 60));
                const timeH: number = Math.floor(
                  (num % (24 * 60 * 60)) / (60 * 60)
                );
                const timeM: number = Math.floor(
                  ((num % (24 * 60 * 60)) % (60 * 60)) / 60
                );
                const timeS: number = ((num % (24 * 60 * 60)) % (60 * 60)) % 60;
                const timeDMS: string =
                  timeH + "時間" + timeM + "分" + timeS + "秒";
                console.log(timeDMS);
                return (
                  <TableRow>
                    <TableCell>{createDate}　｜　</TableCell>
                    <TableCell>{timeDMS}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Styled.content>
    </Styled.wrapper>
  );
};

export default Data;
