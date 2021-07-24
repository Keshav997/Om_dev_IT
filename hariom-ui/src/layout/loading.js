import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
  return (
    <div className="flex flex-row justify-center item-center space-x-2 mt-12 text-2xl rext-opacity-50 text-primary">
      <span>
        <FontAwesomeIcon icon={faSpinner} />
      </span>
      <span>Loading</span>
    </div>
  );
};

export default Loading;
