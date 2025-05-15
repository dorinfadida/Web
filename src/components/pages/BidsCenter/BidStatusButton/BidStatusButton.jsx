import { FaCheckCircle, FaTimesCircle, FaSyncAlt } from 'react-icons/fa';
import './BidStatusButton.css';

export const BidStatusButton = ({text, accept=false, decline=false, change=false, icon=false}) => {
      const statusClass = accept
    ? 'accept'
    : decline
    ? 'decline'
    : change
    ? 'change'
    : '';

  return (
    <div className={`status-button ${statusClass}`}>
        <p className="status-button-text">{text}</p>
      {icon && accept && <FaCheckCircle className="status-icon" />}
      {icon && decline && <FaTimesCircle className="status-icon" />}
      {icon && change && <FaSyncAlt className="status-icon" />}
    </div>
  );

}; 
export default BidStatusButton;