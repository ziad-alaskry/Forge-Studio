import ForgeButton from "@/components/ui/ForgeButton";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ForgeContactModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-lg bg-forgeMetal/90 border border-forgeGlow/30 rounded-2xl p-8 shadow-forgeGlow">
        
        <h2 className="text-2xl font-semibold text-white mb-2">
          What are we building
        </h2>

        <p className="text-white/60 mb-6">
          Tell us about your idea and we’ll get back to you shortly.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows={4}
            className="w-full p-3 rounded-lg bg-black/40 text-white outline-none focus:ring-1 focus:ring-forgeBlue"
          />

          <div className="flex justify-end gap-4 pt-4">
            <ForgeButton
              label="Cancel"
              variant="secondary"
              onClick={onClose}
            />

            <ForgeButton
              label="Send message"
              variant="primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgeContactModal;
