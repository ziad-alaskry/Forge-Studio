import { useState } from "react";
/**
 * Simple local modal controller.
 * no global state on purpose. 
 */

export const useContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return {
        isOpen,
        open,
        close,
    };
};