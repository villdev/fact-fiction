import { toast } from "react-toastify";

export const successNotification = (message) => {
  return toast.dark(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      color: "rgb(183, 223, 185)",
      backgroundColor: "rgb(7, 17, 7)",
    },
  });
};
export const successRemoveNotification = (message) => {
  return toast.dark(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: {
      color: "rgb(250, 179, 174)",
      backgroundColor: "rgb(24, 6, 5)",
    },
  });
};
