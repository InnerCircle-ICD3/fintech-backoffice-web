import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {lnb, lnbContainer, top} from "@/styles/lnb.css";
import {SIDE} from "@/constants/common";
import LnbMenu from "@/pages/Main/containers/Lnb/LnbMenu";

const Lnb = () => {
  const [bottomHeight, setBottomHeight] = useState<number>(0);
  const bottomRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!bottomRef.current) {
      return;
    }

    setBottomHeight(bottomRef.current.offsetHeight);
  }, [bottomRef]);

  return (
    <div className={lnbContainer}>
      <motion.div
        className={lnb}
        initial={{ width: SIDE.WIDTH.EXPAND }}
        animate={{ width:  SIDE.WIDTH.EXPAND}}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className={top} style={{ height: `calc(100% - ${bottomHeight}px)` }}>

          <LnbMenu />
        </div>
      </motion.div>
    </div>
  );
};

export default Lnb;
