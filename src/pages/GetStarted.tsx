import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';

// Defines the pricing plans available to users. Each object contains details for a single plan.
const plans = [
  {
    name: 'PREVIEW',
    description: 'A great start to grow your network. Get to know the Elinity trial basic features.',
    price: 'FREE',
    priceNote: '',
    featuresTitle: "What's included",
    features: [
      'Components',
      'Blocks',
      'Sections',
      'Auto layout',
      'Component properties',
      'Responsiveness support',
      'No updates',
    ],
    // Card: dark bg, light border
    cardClass: 'bg-[#181b2b] border border-[#3a3e5a] text-white',
    buttonClass: 'bg-[#23243a] text-white hover:bg-[#23243a]/80',
    featuresText: 'text-gray-200',
    featuresTitleText: 'text-gray-300',
    checkColor: 'text-blue-400',
  },
  {
    name: 'ELITE',
    description: 'Take your Network to the next level with full access to the full features. Best for Elite Members.',
    price: '$60',
    priceNote: 'USD',
    subNote: 'One time purchase',
    featuresTitle: 'Everything in PREVIEW plus:',
    features: [
      'Full Figma Design',
      'Libraries',
      'Templates',
      'Icons System',
      'Free Lifetime updates',
      '1 user',
    ],
    // Card: blue gradient, white border
    cardClass: 'bg-gradient-to-br from-[#1e2a4a] via-[#2e5cfa] to-[#1e2a4a] border border-white text-white',
    buttonClass: 'bg-white text-[#23243a] hover:bg-gray-200',
    featuresText: 'text-white',
    featuresTitleText: 'text-white',
    checkColor: 'text-blue-300',
  },
  {
    name: 'PREMIUM',
    description: 'Take your Network to the next level with full access to the full features. Best for Elite Members.',
    price: '$180',
    priceNote: 'USD',
    subNote: 'One time purchase',
    featuresTitle: 'Everything in PREVIEW plus:',
    features: [
      'Full Figma Design',
      'Libraries',
      'Templates',
      'Icons System',
      'Free Lifetime updates',
      'Unlimited users',
    ],
    // Card: purple-pink gradient, white border
    cardClass: 'bg-gradient-to-br from-[#6d2e5d] via-[#a155e7] to-[#7c4dff] border border-white text-white',
    buttonClass: 'bg-white text-[#23243a] hover:bg-gray-200',
    featuresText: 'text-white',
    featuresTitleText: 'text-white',
    checkColor: 'text-pink-200',
  },
];

const CheckIcon = ({ className = '' }) => (
  <svg className={`w-4 h-4 flex-shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
);

const GetStarted: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Handles the click event for the "Get it Now!" button.
   * For paid plans, it navigates to the payment page, passing the selected plan's data.
   * For free plans, it currently logs a message (can be updated for other actions).
   * @param plan - The selected plan object.
   */
  const handleGetStarted = (plan: any) => {
    if (plan.price === 'FREE') {
      // Handle free plan logic if necessary, maybe show a message or redirect to dashboard
      console.log("Free plan selected");
      return;
    }
    // Navigate to the payment page and pass the plan details in the route's state.
    navigate('/payment', { state: { plan } });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#0a0a23] via-[#181848] to-[#3a185a]">
      <div className="flex-1 w-full flex flex-col items-center pt-32 pb-8 px-2">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-2 mt-8 md:mt-0">
          Choose a <span className="text-[#a155e7]">Pricing Plan</span>
        </h1>
        <p className="text-purple-200 text-center mb-10 text-base md:text-lg max-w-xl">
          Upgrade to Unlock more features to build your own network and enjoy .
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full max-w-5xl">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between items-center rounded-2xl shadow-xl px-8 py-8 w-full max-w-xs h-[520px] transition-transform hover:scale-105 ${plan.cardClass}`}
              style={{ backdropFilter: 'blur(8px)' }}
            >
              <span className="uppercase tracking-widest text-xs font-bold mb-2 text-gray-300">{plan.name}</span>
              <p className="text-xs text-gray-400 text-center mb-4 min-h-[40px]">{plan.description}</p>
              <div className="flex flex-col items-center mb-2">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.priceNote && <span className="text-xs text-gray-300 font-semibold mt-1">{plan.priceNote}</span>}
                {plan.subNote && <span className="text-xs text-gray-400">{plan.subNote}</span>}
              </div>
              <button
                onClick={() => handleGetStarted(plan)}
                className={`mt-2 mb-6 px-6 py-2 rounded-full font-bold shadow-md transition-all ${plan.buttonClass}`}
              >
                Get it Now!
              </button>
              <div className="w-full">
                <div className={`text-xs font-semibold mb-2 ${plan.featuresTitleText}`}>{plan.featuresTitle}</div>
                <ul className={`text-sm space-y-2 w-full text-left mt-2 ${plan.featuresText}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckIcon className={plan.checkColor} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default GetStarted; 