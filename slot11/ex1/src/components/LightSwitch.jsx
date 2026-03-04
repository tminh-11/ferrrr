// src/components/LightSwitch.jsx
import React, { useReducer } from 'react'; // [cite: 186]
import { Button } from 'react-bootstrap'; // [cite: 187]
import { useTheme } from '../contexts/ThemeContext'; // Import custom hook [cite: 188]

// 1. Khởi tạo trạng thái ban đầu: Đèn đang tắt [cite: 189, 190]
const initialState = { isOn: false };

// 2. Định nghĩa hàm reducer để xử lý các hành động của đèn [cite: 191, 192]
function reducer(state, action) {
  switch (action.type) {
    case 'toggle': // Đảo ngược trạng thái [cite: 194, 195]
      return { isOn: !state.isOn };
    case 'turnOn': // Bật đèn [cite: 196, 197]
      return { isOn: true };
    case 'turnOff': // Tắt đèn [cite: 198, 199]
      return { isOn: false };
    default:
      return state; // [cite: 200, 201]
  }
}

function LightSwitch() {
  // 3. Sử dụng useReducer để quản lý trạng thái isOn [cite: 205, 206]
  const [state, dispatch] = useReducer(reducer, initialState);

  // 4. Sử dụng ThemeContext để lấy theme và hàm chuyển đổi [cite: 207, 208]
  const { theme, toggleTheme } = useTheme();

  // Các hàm gửi action (dispatch) [cite: 209, 210, 211, 212]
  const toggle = () => dispatch({ type: 'toggle' });
  const turnOn = () => dispatch({ type: 'turnOn' });
  const turnOff = () => dispatch({ type: 'turnOff' });

  // Style chung cho các button theo tài liệu [cite: 213, 214, 222]
  const buttonStyle = {
    margin: '5px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px'
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}> {/* [cite: 224] */}
      <h2>Công Tắc Đèn</h2> {/* [cite: 225] */}
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Đèn hiện đang: {state.isOn ? 'Bật' : 'Tắt'} {/* hiển thị trạng thái [cite: 226] */}
      </p>

      {/* Button thay đổi Theme (Sáng/Tối) [cite: 227] */}
      <Button
        onClick={toggleTheme}
        style={{
          ...buttonStyle,
          background: theme === 'light' ? '#6c757d' : '#f8f9fa', // [cite: 231]
          color: theme === 'light' ? '#ffffff' : '#000000' // [cite: 232]
        }}
      >
        {theme === 'light' ? 'Dark' : 'Light'} {/* [cite: 235] */}
      </Button>

      {/* Các nút điều khiển trạng thái đèn [cite: 237, 243, 249] */}
      <Button
        onClick={toggle}
        style={{ ...buttonStyle, background: '#007bff', color: 'white' }}
      >
        Chuyển Đổi {/* [cite: 241] */}
      </Button>

      <Button
        onClick={turnOn}
        style={{ ...buttonStyle, background: '#28a745', color: 'white' }}
      >
        Bật Đèn {/* [cite: 247] */}
      </Button>

      <Button
        onClick={turnOff}
        style={{ ...buttonStyle, background: '#dc3545', color: 'white' }}
      >
        Tắt Đèn {/* [cite: 253] */}
      </Button>
    </div>
  );
}

export default LightSwitch; // [cite: 258]