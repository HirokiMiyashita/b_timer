import { useRouter } from "next/dist/client/router";
import { useState, useCallback, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Head from "../component/Head/Head";
import Button from "@material-ui/core/Button";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionL: {
      width: "30%",
      position: "fixed",
      bottom: "1%",
      left: "1%",
    },
    positionC: {
      width: "30%",
      position: "fixed",
      bottom: "1%",
      left: "35%",
    },
    positionR: {
      width: "30%",
      position: "fixed",
      bottom: "1%",
      right: "1%",
    },
    paddingT: {
      paddingTop: "10%",
    },
  })
);

const WaterBall: React.VFC = () => {
  // 値の初期設定
  const router = useRouter();
  const [count, setCount] = useState(0);
  const intervalRef = useRef<any>(null);
  const classes = useStyles();

  // タイマーの開始
  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
  }, []);
  // タイマーの停止
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const dateMove = () => {
    router.push({
      pathname: "./Calculations/Data",
      query: { count },
    });
  };
  console.log(count);
  return (
    <div>
      <Head />
      <h1 className={classes.paddingT}>{count}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={start}
        className={classes.positionL}
      >
        スタート
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={stop}
        className={classes.positionC}
      >
        ストップ
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={dateMove}
        className={classes.positionR}
      >
        終了
      </Button>
    </div>
  );
};
export default WaterBall;
