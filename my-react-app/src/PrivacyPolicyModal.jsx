import { useState } from 'react';
import './PrivacyPolicyModal.css';

function PrivacyPolicyModal({ onClose }) {
  const [agreed, setAgreed] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('privacyPolicyAgreed', 'true');
    onClose();
  };

  return (
    <div className="privacy-modal-overlay">
      <div className="privacy-modal">
        <h2>Privacy Policy</h2>
        <div className="privacy-content">
          <p>
            Last Updated: March 1, 2026
          </p>
          <p>
            At Privacy Policy Checker, we believe privacy is a right, not a feature. Because our tool is designed to help you analyze privacy policies, we hold ourselves to the highest standard of data minimalism.
          </p>
          
          <h3>1. No Personal Data Collection</h3>
          <p>
            We do not require an account, email address, or any personal identification to use this website. We do not "track" you across the internet, and we do not sell your data to third parties.
          </p>
          
          <h3>2. How Your Input is Handled</h3>
          <p>
            When you paste a privacy policy or provide a URL for analysis:
          </p>
          <ul>
            <li><strong>Processing:</strong> The text is processed solely to provide you with a legitimacy score and risk analysis.</li>
            <li><strong>Retention:</strong> We do not store the text of the policies you check. Once your session is closed, that data is gone.</li>
          </ul>
          
          <h3>3. Cookies and Tracking</h3>
          <p>
            We do not use tracking cookies, advertising pixels, or invasive analytics.
          </p>
          <p>
            <strong>Note:</strong> Our hosting provider may collect standard server logs (such as IP addresses) for security and DDoS protection. This data is not accessible to us for marketing purposes.
          </p>
          
          <h3>4. Your Rights</h3>
          <p>
            Since we don't collect your data, there is nothing for us to delete or export! However, if you have questions about how the app works technically, feel free to contact us.
          </p>
          
          <h3>5. Contact Us</h3>
          <p>
            If you have questions about this policy, reach out at: <a href="mailto:wendric.g.villarin@gmail.com">wendric.g.villarin@gmail.com</a>
          </p>
        </div>
        <div className="privacy-actions">
          <label className="privacy-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>I understand and agree</span>
          </label>
          <button
            className="privacy-button"
            onClick={handleAccept}
            disabled={!agreed}
          >
            Accept & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyModal;
