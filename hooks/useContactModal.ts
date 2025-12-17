import { useState } from "react";
/**
 * Simple local modal controller.
 * no global state on purpose. 
 */

export const useContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedBundle, setSelectedBundle] = useState<string | null>(null);

    const open = (bundleId?: string) => {
        
        if(bundleId) {
            setSelectedBundle(bundleId)
        }

        setIsOpen(true);
    }


    const close = () => {
        setSelectedBundle(null)
        setIsOpen(false);
    }

    return {
        isOpen,
        open,
        close,
        selectedBundle
    };
};