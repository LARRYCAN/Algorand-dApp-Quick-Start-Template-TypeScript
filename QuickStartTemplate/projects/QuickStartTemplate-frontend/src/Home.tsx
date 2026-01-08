// Home.tsx – DRODO Professional Home Screen (Refined)

import { useWallet } from '@txnlab/use-wallet-react'
import React, { useState } from 'react'
import {
  AiOutlineDeploymentUnit,
  AiOutlineSend,
  AiOutlineStar,
  AiOutlineWallet,
} from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2 } from 'react-icons/bs'

// Frontend modals
import AppCalls from './components/AppCalls'
import ConnectWallet from './components/ConnectWallet'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'
import Transact from './components/Transact'
import EmailOnboarding from './components/EmailOnboarding'

interface HomeProps {}

const cardBase =
  'rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300'
const iconStyle = 'text-3xl'

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)
  const [openEmailModal, setOpenEmailModal] = useState<boolean>(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-inter">
      {/* Navbar */}
      <nav className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-indigo-600 text-white font-bold">
              D
            </div>
            <span className="font-semibold tracking-wide text-gray-800">DRODO</span>
          </div>

          <button
            onClick={() => setOpenWalletModal(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            <BsWallet2 />
            {activeAddress ? 'Wallet Linked' : 'Connect Wallet'}
          </button>
        </div>
      </nav>

      {/* Hero / Onboarding */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
              <AiOutlineWallet />
              Decentralized Logistics Network
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Every delivery is a
              <span className="block text-indigo-600">unique digital ticket</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-10">
              DRODO connects senders with verified local couriers using decentralized technology. Start with email onboarding to register, or connect a wallet to see all features instantly.
            </p>

            {/* Onboarding / Connect Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpenEmailModal(true)}
                className="px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 font-medium hover:border-indigo-500 hover:text-indigo-600 transition"
              >
                Continue with Email
              </button>

              {!activeAddress && (
                <button
                  onClick={() => setOpenWalletModal(true)}
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                >
                  Connect Wallet
                </button>
              )}
            </div>

            <p className="mt-4 text-sm text-gray-500">
              New to Web3? Start with email to register and explore DRODO. Wallet is required only for payments and on-chain interactions.
            </p>
          </div>

          {/* Right: How it works */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10">
              <h3 className="font-semibold text-gray-900 mb-4">How DRODO Works</h3>
              <ul className="space-y-4 text-gray-600 text-sm">
                <li>• Delivery requests become secure digital tickets</li>
                <li>• Verified couriers accept jobs nearby</li>
                <li>• Payments and records are transparent and secure</li>
                <li>• Powered by Algorand smart contracts</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Action Dashboard */}
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-20">
          {activeAddress ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 mb-10">
                Available Actions
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <button
                  className={`${cardBase} p-6 text-left`}
                  onClick={() => setOpenPaymentModal(true)}
                >
                  <div className="mb-4 p-3 rounded-lg bg-indigo-100 text-indigo-700 inline-flex">
                    <AiOutlineSend className={iconStyle} />
                  </div>
                  <h3 className="font-semibold mb-1">Send Payment</h3>
                  <p className="text-sm text-gray-500">
                    Transfer ALGO or assets securely.
                  </p>
                </button>

                <button
                  className={`${cardBase} p-6 text-left`}
                  onClick={() => setOpenMintModal(true)}
                >
                  <div className="mb-4 p-3 rounded-lg bg-pink-100 text-pink-700 inline-flex">
                    <AiOutlineStar className={iconStyle} />
                  </div>
                  <h3 className="font-semibold mb-1">Mint Delivery NFT</h3>
                  <p className="text-sm text-gray-500">
                    Create delivery-backed digital tickets.
                  </p>
                </button>

                <button
                  className={`${cardBase} p-6 text-left`}
                  onClick={() => setOpenTokenModal(true)}
                >
                  <div className="mb-4 p-3 rounded-lg bg-emerald-100 text-emerald-700 inline-flex">
                    <BsArrowUpRightCircle className={iconStyle} />
                  </div>
                  <h3 className="font-semibold mb-1">Create Token</h3>
                  <p className="text-sm text-gray-500">
                    Launch a new Algorand asset.
                  </p>
                </button>

                <button
                  className={`${cardBase} p-6 text-left`}
                  onClick={() => setOpenAppCallsModal(true)}
                >
                  <div className="mb-4 p-3 rounded-lg bg-blue-100 text-blue-700 inline-flex">
                    <AiOutlineDeploymentUnit className={iconStyle} />
                  </div>
                  <h3 className="font-semibold mb-1">Smart Contracts</h3>
                  <p className="text-sm text-gray-500">
                    Interact with on-chain delivery logic.
                  </p>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-600">
              Start with email onboarding or connect a wallet to see features.
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} DRODO — Decentralized Logistics on Algorand
        </div>
      </footer>

      {/* Modals */}
      <ConnectWallet
        openModal={openWalletModal}
        closeModal={() => setOpenWalletModal(false)}
      />
      <Transact
        openModal={openPaymentModal}
        setModalState={setOpenPaymentModal}
      />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint
        openModal={openTokenModal}
        setModalState={setOpenTokenModal}
      />
      <AppCalls openModal={openAppCallsModal} setModalState={setOpenAppCallsModal} />
      <EmailOnboarding
        openModal={openEmailModal}
        closeModal={() => setOpenEmailModal(false)}
      />
    </div>
  )
}

export default Home
