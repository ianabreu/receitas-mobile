import { ReactNode, createContext, useContext, useReducer } from "react";

type State = {
  currentStep: number;
  title: string;
  description: string;
  category: string;
  cover: string;
  link: string;
};
type Action = {
  type: FormActions;
  payload: any;
};
type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};
type FormProviderProps = {
  children: ReactNode;
};
//Context
const FormContext = createContext<ContextType | undefined>(undefined);

const initialData: State = {
  currentStep: 0,
  title: "",
  description: "",
  category: "",
  cover: "",
  link: "",
};
//Reducer
export enum FormActions {
  setCurrentStep,
  setTitle,
  setDescription,
  setCategory,
  setCover,
  setLink,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setTitle:
      return { ...state, title: action.payload };
    case FormActions.setDescription:
      return { ...state, description: action.payload };
    case FormActions.setCover:
      return { ...state, cover: action.payload };
    case FormActions.setCategory:
      return { ...state, category: action.payload };
    case FormActions.setLink:
      return { ...state, link: action.payload };
    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

//Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("useForm precisa ser usado dentro do FormProvider");
  return context;
};
