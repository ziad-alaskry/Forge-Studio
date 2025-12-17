// 📍 UI Component — owns presentation, not business logic
import ForgeButton from "@/components/ui/ForgeButton";
import { useState } from "react";

// 📍 Data Layer Hook
import { useMutation } from "@apollo/client/react";
import { CREATE_LEAD } from "@/graphql/mutations";

interface Props {
  isOpen: boolean;
  selectedBundle?: string | null; // new (hanldles bundles from pricing cards selection)
  onClose: () => void;
}

const ForgeContactModal = ({ isOpen, onClose, selectedBundle }: Props) => {
  // 📍 Local UI state (form inputs only)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // 📍 Server interaction state (Apollo owns this)
  const [createLead, { loading, error, data }] =
    useMutation(CREATE_LEAD);

  if (!isOpen) return null;

  // 📍 Submission handler — talks to backend only
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createLead({
      variables: { name, email, message },
    });

    // 📍 Reset form for next open (not for success state)
    setName("");
    setEmail("");
    setMessage("");
  };

  // 📍 Close handler — resets entire modal lifecycle
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* 📍 Overlay (modal responsibility) */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur"
        onClick={handleClose}
      />

      {/* 📍 Modal Shell */}
      <div className="relative z-10 w-full max-w-lg bg-forgeMetal/90 border border-forgeGlow/30 rounded-2xl p-8 shadow-forgeGlow">

        {/* ================= SUCCESS STATE ================= */}
        {/* 📍 Driven by server response, not local flags */}
        {data ? (
          <div className="text-center py-4">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Message Received 🚀
            </h2>

            <p className="text-white/60 mb-8">
              Thank you. We’ve received your idea and will contact you shortly.
            </p>

            <ForgeButton
              label="Close"
              variant="primary"
              onClick={handleClose}
            />
          </div>
        ) : (
          <>
            {/* ================= FORM STATE ================= */}
            <h2 className="text-2xl font-semibold text-white mb-2">
              Inform us
            </h2>

            <p className="text-white/60 mb-6">
              Tell us about your idea and we’ll get back to you shortly.
            </p>

            {/* 📍 Failure state — human readable */}
            {error && (
              <p className="text-red-400 text-sm mb-4">
                Something went wrong. Please try again.
              </p>
            )}

            {/* Show bundles inside modal */}
            {selectedBundle && (
              <div className="mb-4 text-sm text-forgeBlue">
                Selected package: 
                 <span className="font-semibold">
                     {selectedBundle}
                  </span>
              </div>
            ) }


            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 📍 Inputs are dumb, controlled components */}
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
                required
              />

              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
                required
              />

              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
                required
              />

              {/* 📍 Action Row */}
              <div className="flex justify-end gap-4 pt-4">
                <ForgeButton
                  label="Cancel"
                  variant="secondary"
                  onClick={handleClose}
                />

                <ForgeButton
                  label={loading ? "Sending..." : "Send message"}
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
