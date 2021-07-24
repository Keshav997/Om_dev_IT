import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = () => {
  return (
    <div className="flex flex-row justify-center item-center space-x-2 mt-12 text-2xl rext-opacity-50 text-red-600">
      <span>
        <FontAwesomeIcon icon={faInfoCircle} />
      </span>
      <span>Error</span>
    </div>
  );
};

export default Error;
