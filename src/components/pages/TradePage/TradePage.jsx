import react from "react";
import TradeContainer from "./TradeContainer"

export default function TradePage() {
    return (
      <div>
        <ToolBar/>
        <TradeContainer classname="trade-wrapper" />
      </div>
    );
  }