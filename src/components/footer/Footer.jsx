import React, { useState, useEffect, useRef } from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import dayjs from "dayjs";
import { setupSettingsIconAnimation } from "../../animations/animations";
import "../../styles/footer.scss";
import { Tooltip } from "@mui/material";
import Start from "./Start";

export default function Footer({
  onOpenSettings,
  handleOpenEmail,
  handleOpenPdf,
}) {
  const [date, setDate] = useState(dayjs());
  const [time, setTime] = useState(dayjs());
  const settingsIconRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(dayjs());
      setTime(dayjs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Setup settings icon animation
  useEffect(() => {
    const icon = settingsIconRef.current;
    if (!icon) return;
    const cleanup = setupSettingsIconAnimation(icon);
    return cleanup;
  }, []);

  return (
    <div className="footer">
      <div className="footerLeft">
        <Start
          handleOpenEmail={handleOpenEmail}
          handleOpenPdf={handleOpenPdf}
        />
      </div>
      <div className="footerRight">
        <div className="settingsWrapper">
          <Tooltip title="Settings">
            <SettingsOutlinedIcon
              ref={settingsIconRef}
              className="settingsIcon"
              onClick={onOpenSettings}
            />
          </Tooltip>
        </div>
        <div className="timeWrapper">
          <div className="footer-time">{time.format("HH:mm:ss")}</div>
          <div className="footer-date">{date.format("DD/MM/YYYY")}</div>
        </div>
      </div>
    </div>
  );
}
