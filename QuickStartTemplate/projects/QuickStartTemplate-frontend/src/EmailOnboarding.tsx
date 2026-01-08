import React from 'react'

interface Props {
  openModal: boolean
  closeModal: () => void
}

const EmailOnboarding: React.FC<Props> = ({ openModal, closeModal }) => {
  if (!openModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">
          Continue with Email or Wallet
        </h2>

        <p className="text-gray-600 mb-6">
          You don’t need a wallet to get started. Learn how DRODO works, choose
          your role, and connect a wallet only when you’re ready.
        </p>

        <div className="space-y-4 text-sm text-gray-600">
          <p>• Understand how decentralized delivery works</p>
          <p>• Explore sender and courier roles</p>
          <p>• Learn why wallets are used — before connecting</p>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:border-gray-400"
          >
            Close
          </button>

          <button
            onClick={closeModal}
            className="px-5 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmailOnboarding
