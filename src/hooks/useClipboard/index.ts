import React from "react";

const useClipboard = () => {
  const copyToClipboard = React.useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      alert("Failed to copy");
    }
  }, []);
  return copyToClipboard;
};

export default useClipboard;
