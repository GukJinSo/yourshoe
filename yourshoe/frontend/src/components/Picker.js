import { GithubPicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR_ACTION_TYPES } from '../store';

// 색깔 변경 픽커
const Picker = () => {
  const colors = useSelector((store) => store);
  const dispatcher = useDispatch();
  return (
    <GithubPicker
      onChange={(e) =>
        dispatcher({
          type: COLOR_ACTION_TYPES.colorChange,
          payload: { color: e.hex },
        })
      }
    ></GithubPicker>
  );
};

export default Picker;
