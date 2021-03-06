// @flow

import type { OperationType } from "@ledgerhq/live-common/lib/types";
import React from "react";
import OperationStatusIconSend from "./Send";
import OperationStatusIconReceive from "./Receive";
import OperationStatusIconDelegate from "./Delegate";
import OperationStatusIconUndelegate from "./Undelegate";
import OperationStatusIconReveal from "./Reveal";
import OperationStatusIconCreate from "./Create";

export default ({
  type,
  confirmed,
  failed,
  size = 24,
}: {
  size?: number,
  type: OperationType,
  confirmed?: boolean,
  failed?: boolean,
}) => {
  const IconsComponent: { [_: OperationType]: * } = {
    OUT: OperationStatusIconSend,
    IN: OperationStatusIconReceive,
    DELEGATE: OperationStatusIconDelegate,
    UNDELEGATE: OperationStatusIconUndelegate,
    REVEAL: OperationStatusIconReveal,
    CREATE: OperationStatusIconCreate,
    NONE: OperationStatusIconSend,
  };

  const Icon = IconsComponent[type] || OperationStatusIconSend;
  return <Icon size={size} confirmed={confirmed} failed={failed} />;
};
