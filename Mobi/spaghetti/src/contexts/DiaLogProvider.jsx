import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import Dialog from "../components/Dialog";

export const DialLogState = {
  ALERT: "ALERT",
  CONFIRM: "CONFIRM",
  DOUBLE_CHECK: "DOUBLE_CHECK",
  CLOSE: "CLOSE",
};

const initialState = {
  type: "",
  text: "",
  isOpne: false,
  onConfirm: () => {},
  onCancel: () => {},
  position: {
    x: 50,
    y: 10,
  },
};

const DiaLogContext = createContext();

export const useDiaLogStore = () => useContext(DiaLogContext);

const dialogReducer = (state, action) => {
  switch (action.type) {
    case "ALERT":
      const newOptionAlert = Object.assign({}, state);
      newOptionAlert.type = action.type;
      newOptionAlert.text = action.payload.text;
      newOptionAlert.isOpen = action.payload.isOpen;
      newOptionAlert.onConfirm = action.payload.onConfirm;
      return newOptionAlert;
    case "CONFIRM":
      const newOptionConfirm = Object.assign({}, state);
      newOptionConfirm.type = action.type;
      newOptionConfirm.text = action.payload.text;
      newOptionConfirm.isOpen = action.payload.isOpen;
      newOptionConfirm.onConfirm = action.payload.onConfirm;
      newOptionConfirm.onCancel = action.payload.onCancel;
      return newOptionConfirm;
    case "DOUBLE_CHECK":
      const newOptionDoubleCheck = Object.assign({}, state);
      newOptionDoubleCheck.text = action.payload.text;
      newOptionDoubleCheck.onConfirm = action.payload.onConfirm;
      return newOptionDoubleCheck;
    case "CLOSE":
      const newOptionClose = Object.assign({}, state);
      newOptionClose.isOpen = false;
      return newOptionClose;
    default:
      return state;
  }
};

const DiaLogProvider = ({ children }) => {
  const [dialogAttribute, dispatch] = useReducer(dialogReducer, initialState);
  const diaLogRef = useRef();

  useEffect(() => {
    if (dialogAttribute.isOpen) return diaLogRef.current.showModal();
    diaLogRef.current.close();
  }, [dialogAttribute.isOpen]);

  const onCloseDiaLog = () => {
    dispatch({
      type: DialLogState.CLOSE,
    });
  };

  return (
    <DiaLogContext.Provider value={[dialogAttribute, dispatch]}>
      {children}
      <Dialog {...dialogAttribute} ref={diaLogRef} onClose={onCloseDiaLog} />
    </DiaLogContext.Provider>
  );
};
export default DiaLogProvider;
