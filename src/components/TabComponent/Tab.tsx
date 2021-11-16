import * as React from "react";

interface TabProps {
  label: string;
}

const Tab: React.FC<TabProps> = ({ label, children }) => <>{children}</>;

export default Tab;
