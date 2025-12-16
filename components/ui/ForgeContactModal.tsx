import ForgeButton from "@/components/ui/ForgeButton";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { CREATE_LEAD } from "@/graphql/mutations";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ForgeContactModal = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Added state
  
  const [createLead, { loading, error }] = useMutation(CREATE_LEAD);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createLead({
        variables: { name, email, message },
      });
      
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true); // Switch to success view instead of closing
    } catch (err) {
      console.error("Mutation failed:", err);
    }
  };

  // Reset state when closing to ensure form returns for next time
  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-forgeMetal/90 border border-forgeGlow/30 rounded-2xl p-8 shadow-forgeGlow">
        
        {isSubmitted ? (
          /* Success View */
          <div className="text-center py-4">
            <h2 className="text-2xl font-semibold text-white mb-2">Message Recieved! </h2>
            <p className="text-white/60 mb-8">
              Thank you. We have received your idea and will contact you back shortly.
            </p>
            <ForgeButton
              label="Close"
              variant="primary"
              onClick={handleClose}
            />
          </div>
        ) : (
          /* Form View */
          <>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Inform us
            </h2>

            <p className="text-white/60 mb-6">
              Tell us about your idea and we’ll get back to you shortly.
            </p>

            {error && (
              <p className="text-red-400 text-sm mb-4">Error: {error.message}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
              />

              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
              />

              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
              />

              <div className="flex justify-end gap-4 pt-4">
                <ForgeButton
                  label="Cancel"
                  variant="secondary"
                  onClick={handleClose}
                />

                <ForgeButton
                  label={loading ? "Sending" : "Send message"}
                  variant="primary"
                  type="submit"
                />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgeContactModal;