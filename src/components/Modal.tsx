"use client";
import React, { useState, useEffect } from "react";
import { X, CheckCircle2, AlertTriangle, Info, ArrowRight } from "lucide-react";

// Hook to prevent body scroll when modal is open
const useBodyScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
};

export const BasicModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useBodyScrollLock(isOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
      >
        Open Basic Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
          <div 
            className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="relative bg-white dark:bg-neutral-900 w-full max-w-sm rounded-[24px] shadow-2xl overflow-hidden transform transition-all animate-[modal-scale_0.2s_ease-out]">
            <div className="p-6 text-center">
              <h3 className="text-[18px] font-semibold text-neutral-900 dark:text-white mt-2 mb-2 tracking-tight">
                Update Required
              </h3>
              <p className="text-[14px] text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                A new version of the application is available. Would you like to update now to experience the latest features?
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[14px] font-semibold rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  Update Now
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-transparent text-neutral-600 dark:text-neutral-400 text-[14px] font-semibold rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modal-scale {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export const GlassAlertModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useBodyScrollLock(isOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 font-medium rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
      >
        Delete Account
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-neutral-900/40 dark:bg-black/60 backdrop-blur-md transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="relative bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl w-full max-w-md rounded-[28px] shadow-2xl border border-white/20 dark:border-white/10 overflow-hidden animate-[modal-slide-up_0.3s_ease-out]">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-[20px] font-semibold text-neutral-900 dark:text-white mb-2 tracking-tight">
                Delete account completely?
              </h3>
              <p className="text-[14px] text-neutral-500 dark:text-neutral-400 mb-8 leading-relaxed">
                This action cannot be undone. All of your data, projects, and active subscriptions will be permanently erased from our servers immediately.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[14px] font-medium rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 bg-red-500 text-white text-[14px] font-medium rounded-xl hover:bg-red-600 transition-colors shadow-sm shadow-red-500/20"
                >
                  Yes, delete my account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes modal-slide-up {
          0% { opacity: 0; transform: translateY(20px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </>
  );
};

export const RichContentModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useBodyScrollLock(isOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium rounded-xl hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
      >
        Invite Member
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/10 dark:bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="relative bg-white dark:bg-[#0A0A0A] w-full max-w-lg rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-neutral-200/50 dark:border-white/10 overflow-hidden animate-[modal-scale_0.2s_ease-out]">
            <div className="flex items-center justify-between p-5 border-b border-neutral-200/50 dark:border-white/5">
              <h3 className="text-[16px] font-semibold text-neutral-900 dark:text-white">
                Invite to Workspace
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-full transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/50 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Invited members will have full access to view, edit, and delete projects within this workspace.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-[14px] text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Role</label>
                  <select className="w-full px-4 py-2.5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl text-[14px] text-neutral-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm appearance-none cursor-pointer">
                    <option>Developer</option>
                    <option>Designer</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-5 bg-neutral-50 dark:bg-neutral-900/20 border-t border-neutral-200/50 dark:border-white/5 flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-[14px] font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[14px] font-semibold rounded-xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-sm"
              >
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const SuccessModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  useBodyScrollLock(isOpen);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 font-medium rounded-xl hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors"
      >
        Complete Purchase
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-[2px] transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />
          <div className="relative bg-white dark:bg-neutral-900 w-full max-w-sm rounded-[32px] shadow-2xl overflow-hidden text-center animate-[modal-scale_0.3s_cubic-bezier(0.16,1,0.3,1)]">
            <div className="px-8 pt-10 pb-8">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" strokeWidth={2.5} />
              </div>
              <h3 className="text-[22px] font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                Payment Successful!
              </h3>
              <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8">
                Your order #4829 has been processed. We've sent a receipt to your email address.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="group w-full flex items-center justify-center gap-2 py-3.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-[14px] font-semibold rounded-2xl hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm"
              >
                Go to Dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
