import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const LinkIcons = () => (
  <ul className="link-icons">
    <li>
      <a target="_blank" rel="noopener noreferrer" href="http://www.facebook.com/PenobscotCommunityHealthCare" className="color__facebook" title="Facebook" aria-label="Facebook">
        <FontAwesomeIcon icon={["fab", "facebook"]}/>
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/PCHCare" className="color__twitter" title="Twitter" aria-label="Twitter">
        <FontAwesomeIcon icon={["fab", "twitter"]}/>
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/PCHCare" className="color__instagram" title="Instagram" aria-label="Instagram">
        <FontAwesomeIcon icon={["fab", "instagram"]}/>
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/5211558" className="color__linkedin" title="LinkedIn" aria-label="LinkedIn">
        <FontAwesomeIcon icon={["fab", "linkedin"]}/>
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="http://www.youtube.com/pchcvideo" className="color__youtube" title="YouTube" aria-label="YouTube">
        <FontAwesomeIcon icon={["fab", "youtube"]}/>
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://pchc.com/" className="color__pchc" title="PCHC.com" aria-label="PCHC.com">
        <FontAwesomeIcon icon="globe"/>
      </a>
    </li>
  </ul>
);

export default LinkIcons;
