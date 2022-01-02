import useEventOnce from "./useEventOnce"

export default function useDocumentListenerOnce(event, handler) {
  useEventOnce(document, event, handler)
};
