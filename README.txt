# node?????
- js chạy ở đâu: browser
- nodejs giúp chúng ta có thể chạy được file js mà không cần browser
# JS
- Có 2 môi trường để thực thi file js:
+ nodejs
+ browser

# npm (node package manager)?????
- quản lý các thư viện mà cần trong dự án.
- package.json: file thư viện liệt kê ra thư viện cần trong dự án. (khoảng version của thư viện được phép cài đặt)
- package-lock.json: Liệt kê chính xác version của thư viện đang cài là bao nhiêu

# Command
** Chú ý là khi gỡ npm i hay npm run dev thì chúng ta đang ở trong thư mục của dự án.
- npm install hoặc npm i
- npm run dev

- ctrl + c: dừng quá trình chạy của terminal


# Folder
- node_modules: nơi lưu trữ thư viện trong dự án tại local
- public: dùng để lưu trữ file static, icon, image, audio.
- src: nơi code chính của chúng ta.
- vite.config.js: công cụ để chạy dự án - (live server)
- .eslintrc.cjs: (remove) Thống nhất cách code trong dự án. ( chỉ được dùng let và const )

# JSX
- Code HTML trong JS

# Update thư viện
- npm update
- npm outdated: liệt kê ra những thư viện lỗi thời
- npm i react@latest: cài thư viện react với phiên bản mới nhất
- npm i react-router: cài thư viện react-router
- npm i <ten_package>

# React-router

# Style
- inline style ✅
- external style 
- internal style
# React 
- inline style ✅
- global: chỉ cần import vào thì sẽ ăn cho toàn bộ dự án
- module: tên file phải là .module.css

# Data binding
- Dùng {}
- khác với template string ``: ${}

- kiểu dữ liệu chúng ta có thể binding lên trên UI: string, number, jsx.
- Nếu muốn xử lý điều kiện trong binding thì sử dụng toán tử ba ngôi (ternary). Không sử dụng if else

# Handle Event
- on: viết thường
- sự kiện: viết hoa
vd: onClick, onHover, onMouseMove, ...

# npm run <ten_script>
# npx
- npx vite: 
- npx sẽ nhìn vào folder node_modules/bin
- nếu như trong node_modules/bin không có vite thì nó sẽ down về và thực thi -> sau khi thực thi xong thì sẽ remove luôn

# Join
- method của array
- [1,2,3].join("-") => "1-2-3"

# Map
- method của array
- sau khi duyệt qua thì return về lại một mảng có độ dài bằng mảng truyền vào.
- return về một mảng các phần tử có cấu trúc phụ thuộc vào return của callback mà mình tryền vào.

# State
- 