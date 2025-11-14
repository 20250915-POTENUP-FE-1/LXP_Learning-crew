import { createContext, useCallback, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext(<></>);

const ModalProvider = ({ children }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [bottomContainer, setBottomContainer] = useState(null);

  const showModal = useCallback(({ modalContent, bottomContainer }) => {
    setIsModalShow(true);
    setModalContent(modalContent);
    setBottomContainer(bottomContainer || null);
  }, []);

  const hideModal = useCallback(() => {
    setIsModalShow(false);
    setModalContent(null);
    setBottomContainer(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isModalShow,
        modalContent,
        bottomContainer,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
